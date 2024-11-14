import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <div className="logo">
                    <img src={assets.logo} className="img" />
                    <p className="text">Bites Up</p>
                </div>
                <p>We’re here to bring you tasty, quality food from your favorite local restaurants right to your door! With fast, reliable service, we make sure every meal is a delightful and convenient experience. Enjoy your food and make every moment special.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} />
                    <img src={assets.twitter_icon} />
                    <img src={assets.linkedin_icon} />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+92-332-624-2678</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright  2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
