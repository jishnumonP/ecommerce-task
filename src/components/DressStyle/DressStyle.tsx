// DressStyle.tsx
import React from 'react';
import image9 from '../../assets/images/9.png';
import image10 from '../../assets/images/10.png';
import image11 from '../../assets/images/11.png';
import image12 from '../../assets/images/12.png';

interface DressStyleItem {
  id: number;
  name: string;
  image: string;
}

const dressStyles: DressStyleItem[] = [
  { id: 9, name: 'Casual', image: image9 },
  { id: 10, name: 'Formal', image: image10 },
  { id: 11, name: 'Party', image: image11 },
  { id: 12, name: 'Gym', image: image12 }
];

const DressStyle: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="aspect-w-1 aspect-h-1">
            <img src={dressStyles[0].image} alt={dressStyles[0].name} className="object-cover w-50 h-50" />
          </div>
          <div className="aspect-w-2 aspect-h-1">
            <img src={dressStyles[2].image} alt={dressStyles[2].name} className="object-cover w-50 h-50" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="aspect-w-2 aspect-h-1">
            <img src={dressStyles[1].image} alt={dressStyles[1].name} className="object-cover w-50 h-50" />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img src={dressStyles[3].image} alt={dressStyles[3].name} className="object-cover w-50 h-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
