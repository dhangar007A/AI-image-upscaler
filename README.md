# 🤖 AI Image Enhancer

A modern, user-friendly web application that leverages the power of AI to upscale and enhance the quality of your images. Built with React, Vite, and Tailwind CSS, this project demonstrates seamless integration with a third-party AI API to provide a fast and effective image processing tool.

![Screenshot of the AI Image Enhancer application]
*(Note: You should replace this line with an actual screenshot of your project. You can upload an image to your repo and link it here.)*

---

## ✨ Key Features

-   **AI-Powered Upscaling:** Utilizes the PicWish API to intelligently enhance image resolution and quality.
-   **Interactive UI:** A clean, drag-and-drop or click-to-upload interface for a smooth user experience.
-   **Real-time Previews:** Instantly see a side-by-side comparison of your original and enhanced images.
-   **Loading & Error States:** Clear visual feedback for users while the image is processing or if an error occurs.
-   **Light/Dark Mode:** A theme toggle to switch between light and dark modes, with the user's preference saved in their browser.
-   **Responsive Design:** A fully responsive layout that works seamlessly on desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

This project is built with a modern frontend stack:

-   **Frontend:** [React.js](https://react.dev/) (with Vite)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Flowbite](https://flowbite.com/)
-   **API Client:** [Axios](https://axios-http.com/)
-   **AI Service:** [PicWish API](https://picwish.com/api) (or your chosen API)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm / yarn / pnpm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Set up your environment variables:**
    -   Create a file named `.env` in the root of the project.
    -   Add your API key and base URL to the file:
        ```env
        VITE_API_BASE_URL="[https://techhk.aoscdn.com/api](https://techhk.aoscdn.com/api)"
        VITE_API_KEY="your-secret-api-key"
        ```
5.  **Start the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

##Glimps of @ASD's Web application
<img width="1366" height="933" alt="Image" src="https://github.com/user-attachments/assets/2fd995d7-5a8a-4c43-ae42-43fef8edc971" />

<img width="1301" height="931" alt="Image" src="https://github.com/user-attachments/assets/4f4db614-f10c-4780-867f-fcd61f9d5823" />


## Usage

1.  Open the application in your browser.
2.  Click on the upload area or drag and drop an image file (PNG, JPG, etc.).
3.  The original image will appear on the left.
4.  Wait for the AI to process the image; a loading indicator will be shown on the right.
5.  Once complete, the enhanced image will appear on the right side.
