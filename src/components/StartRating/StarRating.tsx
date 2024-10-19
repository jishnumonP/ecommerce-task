// StarRating.tsx
import React from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars).fill(0).map((_, index) => (
        <span key={index} className="text-yellow-500">★</span>
      ))}
      {halfStar && <span className="text-yellow-500">★</span>}
      {Array(emptyStars).fill(0).map((_, index) => (
        <span key={index} className="text-gray-300">★</span>
      ))}
      <span className="ml-2 text-gray-600">{rating}/5</span>
    </div>
  );
};

export default StarRating;
