import React from 'react';
import fullImage from '../../assets/images/fullImage.png'; // Replace with your image path

const FullImageSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black ">
      <img src={fullImage} alt="Full Section" className="w-50 h-full object-contain md:object-cover" />
      <button className="absolute bottom-10 right-10 md:bottom-20 md:right-20 bg-white text-black px-2 py-1 md:px-4 md:py-2 rounded hover:bg-gray-800 transition-colors duration-300">
        See Collection
      </button>
    </div>
  );
};

export default FullImageSection;
