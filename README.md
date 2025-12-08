# 🤖 AI Image Enhancer

A modern, user-friendly web application that leverages the power of AI to upscale and enhance the quality of your images. Built with React, Vite, and Tailwind CSS, this project demonstrates seamless integration with a third-party AI API to provide a fast and effective image processing tool.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://ai-image-upscaler-tq2h.onrender.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/react-18+-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-3+-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 🌐 Live Demo

**[Try it now →](https://ai-image-upscaler-tq2h.onrender.com)**

Experience the power of AI-driven image enhancement in your browser!

---

## 📸 Screenshots

<img width="1366" alt="AI Image Enhancer - Main Interface" src="https://github.com/user-attachments/assets/2fd995d7-5a8a-4c43-ae42-43fef8edc971" />

<img width="1301" alt="AI Image Enhancer - Before and After Comparison" src="https://github.com/user-attachments/assets/4f4db614-f10c-4780-867f-fcd61f9d5823" />

---

## ✨ Key Features

- **🎯 AI-Powered Upscaling:** Utilizes the PicWish API to intelligently enhance image resolution and quality
- **🎨 Interactive UI:** Clean, drag-and-drop or click-to-upload interface for a smooth user experience
- **👀 Real-time Previews:** Instant side-by-side comparison of your original and enhanced images
- **⚡ Fast Processing:** Optimized workflow for quick image enhancement
- **🔄 Loading & Error States:** Clear visual feedback during processing or when errors occur
- **🌓 Light/Dark Mode:** Theme toggle with persistent user preferences
- **📱 Responsive Design:** Seamless experience across desktops, tablets, and mobile devices
- **💾 Easy Download:** One-click download of your enhanced images

---

## 🛠️ Tech Stack

This project is built with a modern frontend stack:

- **Frontend:** [React.js](https://react.dev/) (v18+) with [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Flowbite](https://flowbite.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **AI Service:** [PicWish API](https://picwish.com/api)
- **Deployment:** [Render](https://render.com/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm / yarn / pnpm
- A PicWish API key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dhangar007A/AI-image-upscaler.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd AI-image-upscaler
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up your environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL="https://techhk.aoscdn.com/api"
   VITE_API_KEY="your-secret-api-key"
   ```
   
   > **Note:** Replace `your-secret-api-key` with your actual PicWish API key. You can obtain one from [PicWish API](https://picwish.com/api).

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist` folder.

---

## 📖 Usage

1. **Open the application** in your browser ([live demo](https://ai-image-upscaler-tq2h.onrender.com) or locally)
2. **Upload an image** by clicking the upload area or dragging and dropping a file (PNG, JPG, JPEG, WebP)
3. **View your original image** on the left side of the screen
4. **Wait for AI processing** — a loading indicator will appear on the right
5. **Compare results** — the enhanced image will appear on the right side
6. **Download** your enhanced image with a single click

---

## 🌟 Features in Detail

### Image Upload
- Drag-and-drop functionality
- Click-to-browse file selection
- Supported formats: PNG, JPG, JPEG, WebP
- File size validation and error handling

### AI Enhancement
- Automatic upscaling and quality improvement
- Noise reduction
- Detail enhancement
- Color optimization

### User Experience
- Intuitive interface design
- Real-time processing feedback
- Side-by-side comparison view
- Persistent theme preferences
- Mobile-optimized layout

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Dhangar007A**

- GitHub: [@dhangar007A](https://github.com/dhangar007A)
- Project Link: [https://github.com/dhangar007A/AI-image-upscaler](https://github.com/dhangar007A/AI-image-upscaler)

---

## 🙏 Acknowledgments

- [PicWish API](https://picwish.com/api) for providing the AI enhancement service
- [React](https://react.dev/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Flowbite](https://flowbite.com/) for the beautiful UI components
- [Vite](https://vitejs.dev/) for the blazing-fast build tool

---

## 📊 Project Status

This project is actively maintained. Feel free to submit issues and feature requests!

---

<div align="center">
  <strong>⭐ Star this repo if you find it helpful!</strong>
  
  Made with ❤️ by Dhangar007A
</div>
