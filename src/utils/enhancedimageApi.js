// const base_url = import.meta.env.VITE_API_BASE_URL;
// const api_key = import.meta.env.VITE_API_KEY;

import axios from "axios";

// Constants
const API_KEY = "wx88eihaxkz1vdd9p";                           // API Key for authentication
const BASE_URL = "https://techhk.aoscdn.com/";                // Base URL for the API
const MAXIMUM_RETRIES = 20;                                   // Max retries while polling for enhanced image

// Main function to enhance an image using the API
export const enhancedImageAPI = async (file) => {
    try {
        // Step 1: Upload the original image and get a task ID
        const taskId = await uploadImage(file);
        console.log("Image Uploaded Successfully, Task ID:", taskId);

        // Step 2: Use the task ID to poll for the enhanced image until it's ready
        const enhancedImageData = await PollForEnhancedImage(taskId);
        console.log("Enhanced Image Data:", enhancedImageData);

        // Step 3: Return final result object that contains image URL
        return enhancedImageData;

    } catch (error) {
        console.log("Error enhancing image:", error.message);
    }
};

// Function to upload image and receive a task ID
const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);  // Append file to FormData

    // POST request to create a task for enhancement
    const { data } = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            },
        }
    );

    // If task_id is not present, throw an error
    if (!data?.data?.task_id) {
        throw new Error("Failed to upload image! Task ID not found.");
    }

    return data.data.task_id;
};

// Function to poll the API until the enhanced image is ready or max retries are hit
const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    // If state is 4, it means the task is still processing
    if (result.state === 4) {
        console.log(`Processing... (${retries}/${MAXIMUM_RETRIES})`);

        // Retry limit check
        if (retries >= MAXIMUM_RETRIES) {
            throw new Error("Max retries reached. Please try again later.");
        }

        // Wait 2 seconds before polling again
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Recursive retry
        return PollForEnhancedImage(taskId, retries + 1);
    }

    // If state is not 4, enhancement is complete
    console.log("Enhanced Image URL:", result);
    return result;
};

// Function to fetch the status/result of the image enhancement task
const fetchEnhancedImage = async (taskId) => {
    const { data } = await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
                "X-API-KEY": API_KEY,
            },
        }
    );

    if (!data?.data) {
        throw new Error("Failed to fetch enhanced image! Image not found.");
    }

    return data.data;
};
