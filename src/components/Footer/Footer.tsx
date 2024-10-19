import React from 'react';
import image37 from '../../assets/images/37.png';
import image38 from '../../assets/images/38.png';
import image39 from '../../assets/images/39.png';
import image40 from '../../assets/images/40.png';
import image41 from '../../assets/images/41.png';
import image42 from '../../assets/images/42.png';
import image43 from '../../assets/images/43.png';
import image44 from '../../assets/images/44.png';
import image45 from '../../assets/images/45.png';
import logo from '../../assets/images/SHOP.CO-1.png';
import { FiMail } from 'react-icons/fi'; 

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Newsletter Section */}
      <div className="bg-black text-white py-8 rounded-lg mx-4 md:mx-auto max-w-5xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Left Section - Heading */}
        <div className="text-left md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Stay Up to Date About Our Latest Offers
          </h2>
        </div>

        {/* Right Section - Input and Button */}
        <div >
          {/* Email Input with Icon */}
          <div className="flex flex-col items-center space-y-4 bg-black p-6 rounded-md w-full">
      {/* Email Input with Icon */}
      <div className="flex items-center bg-gray-200 rounded-full p-2 w-full max-w-md">
        <FiMail className="h-6 w-6 text-gray-400 ml-3" />
        <input
          type="email"
          placeholder="Enter your email address"
          className="bg-transparent outline-none w-full pl-3 text-gray-500"
        />
      </div>

      {/* Subscribe Button */}
      <button className="bg-white text-black rounded-full px-6 py-3 w-full max-w-md text-lg font-semibold">
        Subscribe to Newsletter
      </button>
    </div>

          {/* Subscribe Button */}
        
        </div>
      </div>
    </div>

      {/* Main Footer Section */}
      <div className="bg-gray-200 text-gray-800 py-8 p-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <img src={logo} alt="SHOP.CO Logo" className="mb-4" />
            <p>We have clothes that suit your style and which you're proud to wear, from women to men.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <img src={image42} alt="Social Media Icon 1" className="w-8 h-8 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
              <img src={image43} alt="Social Media Icon 2" className="w-8 h-8 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
              <img src={image44} alt="Social Media Icon 3" className="w-8 h-8 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
              <img src={image45} alt="Social Media Icon 4" className="w-8 h-8 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300 cursor-pointer">COMPANY</h3>
            <ul>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">About</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Features</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Works</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Career</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300 cursor-pointer">HELP</h3>
            <ul>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Customer Support</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Delivery Details</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300 cursor-pointer">FAQ</h3>
            <ul>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Account</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Manage Deliveries</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Orders</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Payments</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300 cursor-pointer">RESOURCES</h3>
            <ul>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Free eBooks</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Development Tutorial</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">How to - Blog</li>
              <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and Payment Gateways */}
      <div className="bg-gray-200 text-gray-800 py-4 p-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center border-t border-gray-300">
        <p>Shop.co © 2000-2023. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
          <img src={image37} alt="Payment Gateway 1" className="w-12 h-12 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
          <img src={image38} alt="Payment Gateway 2" className="w-12 h-12 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
          <img src={image39} alt="Payment Gateway 3" className="w-12 h-12 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
          <img src={image40} alt="Payment Gateway 4" className="w-12 h-12 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
          <img src={image41} alt="Payment Gateway 5" className="w-12 h-12 hover:opacity-75 transition-opacity duration-300 cursor-pointer" />
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
