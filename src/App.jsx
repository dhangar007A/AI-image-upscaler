
import Home from './components/Home'
const dotenv = require("dotenv");
dotenv.config();

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold mb-2'>
          AI Image Upscaler</h1>
        <p className='text-lg text-gray-600'>Upload and enhance your images with AI</p>
      </div>
      <Home />
      
      <div className='text-sm text-gray-500 mt-6'>
        Powered By @ASD
      </div>
    </div>
  )
}

export default App
