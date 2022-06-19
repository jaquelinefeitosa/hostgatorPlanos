//import React from 'react'
import './styles.css'
import Logo from '../../assets/hostgator_logo.svg'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src={Logo} alt="logo" />
    </div>
  )
}
