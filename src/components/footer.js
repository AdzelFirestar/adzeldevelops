// ./src/components/footer.js
import React from 'react'
import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-container3">
        <p style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Adzel Develops — All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
