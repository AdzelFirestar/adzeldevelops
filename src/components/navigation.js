// ./src/components/navigation.js
import React from 'react'
import './navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation-container1">
      <div className="navigation-container3">
        <h1 className="navigation-navigation-logo-primary">
          VelocityBroadcast <span className="navigation-navigation-logo-accent">Reborn</span>
        </h1>
      </div>

      {/* Example placeholder for future nav links or toggle menu */}
      <div className="navigation-navigation-toggle-icon1">
        <span className="material-icons">menu</span>
      </div>
      <div className="navigation-navigation-toggle-icon2">
        <span className="material-icons">close</span>
      </div>
      <div className="navigation-navigation-toggle-glow"></div>
    </nav>
  )
}

export default Navigation
