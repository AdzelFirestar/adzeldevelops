// ./src/views/not-found.js
import React from 'react'
import './not-found.css'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const NotFound = () => {
  return (
    <div className="not-found-container1">
      <Navigation />

      <main className="not-found-container2">
        <h1 className="not-found-text2">404</h1>
        <div className="not-found-container3">
          <p className="not-found-text3">Oops! The page you’re looking for doesn’t exist.</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
