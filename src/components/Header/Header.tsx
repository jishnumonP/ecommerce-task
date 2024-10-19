import { useState } from 'react';
import { FaShoppingCart, FaUser, FaChevronDown, FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/SHOP.CO-1.png';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-white shadow-md">
      {/* Mobile Menu Icon */}
      <button className="text-gray-700 md:hidden" onClick={toggleModal}>
        <FaBars />
      </button>

      {/* Company Logo */}
      <div className="flex items-center mr-5">
        <img src={logo} alt="SHOP.CO Logo" className="h-8" />
      </div>

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-700 hover:text-black flex items-center space-x-1">
          <span>Shop</span>
          <FaChevronDown />
        </a>
        <a href="#" className="text-gray-700 hover:text-black">On Sale</a>
        <a href="#" className="text-gray-700 hover:text-black">New Arrivals</a>
        <a href="#" className="text-gray-700 hover:text-black">Brands</a>
      </nav>

      {/* Search Bar for Desktop */}
      <div className="hidden md:flex flex-1 mx-6">
        <input 
          type="text" 
          placeholder="Search for products..." 
          className="w-full border border-gray-300 rounded-md px-4 py-2"
        />
      </div>

      {/* Icons for Desktop */}
      <div className="hidden md:flex space-x-4">
        <button className="text-gray-700">
          <FaShoppingCart />
        </button>
        <button className="text-gray-700">
          <FaUser />
        </button>
      </div>

      {/* Icons for Mobile */}
      <div className="flex md:hidden space-x-4">
        <button className="text-gray-700">
          <FaSearch />
        </button>
        <button className="text-gray-700">
          <FaShoppingCart />
        </button>
        <button className="text-gray-700">
          <FaUser />
        </button>
      </div>

      {/* Slide-Out Menu for Mobile Navigation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4">
            <button className="text-gray-700 mb-4" onClick={toggleModal}>
              <FaTimes />
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-black flex items-center space-x-1">
                <span>Shop</span>
                <FaChevronDown />
              </a>
              <a href="#" className="text-gray-700 hover:text-black">On Sale</a>
              <a href="#" className="text-gray-700 hover:text-black">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-black">Brands</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
