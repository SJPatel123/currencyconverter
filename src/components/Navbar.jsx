import React from 'react'
import './navbar.css'
import DarkMode from './DarkMode'

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-title">
          <p>Currency Converter</p>
        </div>
        <div className="dark-mode">
          <DarkMode />
        </div>
      </div>
    </>
  )
}
