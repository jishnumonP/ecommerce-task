import React from 'react';
import image31 from '../../assets/images/31.png';
import image32 from '../../assets/images/32.png';
import image33 from '../../assets/images/33.png';
import image34 from '../../assets/images/34.png';
import image35 from '../../assets/images/35.png';
import image36 from '../../assets/images/36.png';

const InstagramFollowSection: React.FC = () => {
  return (
    <div className="container mx-auto my-8 text-center hidden sm:block">
      <h2 className="text-3xl font-bold mb-8">Follow Products And Discounts On Instagram</h2>
      <div className="flex justify-center space-x-4 mb-12">
        <img src={image31} alt="Product 31" className="w-32 h-32 object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={image32} alt="Product 32" className="w-32 h-32 object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={image33} alt="Product 33" className="w-32 h-32 object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={image34} alt="Product 34" className="w-32 h-32 object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={image35} alt="Product 35" className="w-32 h-32 object-cover transform transition-transform duration-300 hover:scale-105" />
        <img src={image36} alt="Product 36" className="w-32 h-32 object-cover transform transition-transform duration-300 hover:scale-105" />
      </div>
      <h2 className="text-3xl font-bold mb-4">Or Subscribe To The Newsletter</h2>
      <form className="flex justify-center space-x-2">
        <input
          type="email"
          placeholder="Email Address..."
          className="px-4 py-2 border-b-2 border-black focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 border-b-2 border-black bg-transparent text-gray-700 hover:text-blue-500 transition-colors duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default InstagramFollowSection;
