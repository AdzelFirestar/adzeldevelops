// ./src/views/home.js
import React from 'react'
import './home.css'

// Bring in your shared components
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className="home-container1">
      <Navigation />

      <main className="home-container3">
        <h1 className="home-hero-title-main">VelocityBroadcast Reborn</h1>
        <div className="home-hero-title-divider"></div>
        <h2 className="home-hero-title-sub">Broadcast Smarter, Not Harder</h2>

        <div className="home-language-dots">
          <span className="home-language-dot1"></span>
          <span className="home-language-dot2"></span>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
