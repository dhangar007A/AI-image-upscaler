import axios from 'axios';

// Access the variables from the .env file
const base_url = import.meta.env.VITE_API_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;

export const enhancedImageAPI = async (file) => {
    const taskId = await uploadImage(file)
    console.log("Task ID:", taskId)

    const enhancedImageData = await fetchEnhancedImage(taskId)
    console.log("Enhanced Image URL:", enhancedImageData)

    console.log(enhancedImageData)
    return enhancedImageData
}

const uploadImage = async (file) => {
    const formData = new FormData()
    formData.append('image_file', file)

    const { data } = await axios.post(`${base_url}/tasks/visual/scale`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'X-API-Key': api_key,
        },
    }
    )

    if(!data?.data?.task_id) {
        throw new Error("Failed to uplaod image ---- Task ID not found")
    }

    // code to upload image
    ///api/tasks/visual/scale ---for post---Create a task to enhance photo quality
    return data.data.task_id
    // console.log(data)
}
const fetchEnhancedImage = async (taskId) => {
    // code to fetch enhanced image 
    ///api/tasks/visual/scale/{task_id} ---for get--- Return the result image
    const formData = new FormData()
    formData.append('image_file', file)

    const { data } = await axios.post(`${base_url}/tasks/visual/scale/{task_id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'X-API-Key': api_key,
        },
    }
    )
}
