import './App.css'
import Home from './components/Home'

const App = () => {
  return (
    <div className='app-wrapper'>
      {/* Floating orbs */}
      <div className='orb orb-1'></div>
      <div className='orb orb-2'></div>
      <div className='orb orb-3'></div>

      {/* Header */}
      <header className='header fade-in'>
        <div className='header-badge'>
          <span className='badge-dot'></span>
          AI-Powered Enhancement
        </div>
        <h1>Image Upscaler</h1>
        <p>Transform your images with cutting-edge AI. Enhance resolution, sharpen details, and bring your photos to life.</p>
      </header>

      {/* Main Content */}
      <main className='main-content'>
        <Home />
      </main>

      {/* Footer */}
      <footer className='footer'>
        Built with AI &middot; Powered by <a href='#'>@ASD</a>
      </footer>
    </div>
  )
}

export default App
