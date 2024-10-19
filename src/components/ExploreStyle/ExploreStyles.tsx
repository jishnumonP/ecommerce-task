import React from 'react';
import image19 from '../../assets/images/18.png';
import image18 from '../../assets/images/19.png';
import image20 from '../../assets/images/20.png';
import image21 from '../../assets/images/21.png';
import image22 from '../../assets/images/22.png';

const ExploreStyles: React.FC = () => {
  return (
    <div className="container mx-auto my-8 flex flex-col lg:flex-row">
      {/* First Child Container: Vertical Text */}
      <div className="hidden lg:flex w-full lg:w-1/6 items-center justify-center lg:justify-start mb-4 lg:mb-0">
        <div className="transform -rotate-90 whitespace-nowrap text-lg font-bold">
          <span>EXPLORE NEW AND POPULAR STYLES</span>
        </div>
      </div>
      
      {/* Second Child Container: Full Image */}
      <div className="w-full lg:w-2/6 p-2 lg:ml-16">
        <img src={image19} alt="Full Image" className="object-cover w-full h-full" />
      </div>
      
      {/* Third Child Container: Four Images */}
      <div className="w-full lg:w-3/6 grid grid-cols-2 gap-4 p-2 lg:ml-16">
        <div className="aspect-w-1 aspect-h-1">
          <img src={image18} alt="Image 18" className="object-cover w-full h-full" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src={image20} alt="Image 20" className="object-cover w-full h-full" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src={image21} alt="Image 21" className="object-cover w-full h-full" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src={image22} alt="Image 22" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ExploreStyles;
