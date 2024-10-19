
import { useState } from 'react';

const TopAlertBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white text-center py-2 relative">
      <span>Sign up and get 20% off on your first order. <a href="#" className="underline">Sign Up Now</a></span>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl" 
        onClick={() => setIsVisible(false)}
      >
        &times;
      </button>
    </div>
  );
};

export default TopAlertBar;
