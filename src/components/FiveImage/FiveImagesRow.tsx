// FiveImagesRow.tsx
import React from 'react';
import image13 from '../../assets/images/13.png';
import image14 from '../../assets/images/14.png';
import image15 from '../../assets/images/15.png';
import image16 from '../../assets/images/16.png';
import image17 from '../../assets/images/17.png';

const images = [
  { id: 13, src: image13, alt: 'Image 13' },
  { id: 14, src: image14, alt: 'Image 14' },
  { id: 15, src: image15, alt: 'Image 15' },
  { id: 16, src: image16, alt: 'Image 16' },
  { id: 17, src: image17, alt: 'Image 17' }
];

const FiveImagesRow: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between">
        {images.map(image => (
          <div key={image.id} className="w-1/5 p-2">
            <img src={image.src} alt={image.alt} className="object-cover w-full h-full border" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveImagesRow;
