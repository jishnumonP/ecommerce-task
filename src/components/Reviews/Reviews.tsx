// ReviewsSection.tsx
import React, { useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Review {
  name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shoppeo. From casual wear to elegant dresses, every piece I bought has exceeded my expectations."
  },
  {
    name: 'Alex K.',
    rating: 4,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shoppeo. The range of offerings is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    name: 'James L.',
    rating: 5,
    text: "As someone who's always on the lookout for unique pieces, I'm thrilled to have stumbled upon Shoppeo. The selection of clothes is not only diverse but also on-point with the latest trends."
  }
];

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mx-auto my-8 text-center">
      <h2 className="text-3xl font-bold mb-8">OUR HAPPY CUSTOMERS</h2>
      <div className="relative">
        <div className="hidden md:flex justify-center space-x-8">
          {reviews.map((review, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <span className="ml-4 text-lg font-semibold">{review.name}</span>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden flex items-center justify-center">
          <button onClick={handlePrev} className="p-2">
            <FaArrowLeft />
          </button>
          <div className="border p-6 rounded-lg shadow-lg max-w-xs mx-4">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <span className="ml-4 text-lg font-semibold">{reviews[currentIndex].name}</span>
            </div>
            <p className="text-gray-700">{reviews[currentIndex].text}</p>
          </div>
          <button onClick={handleNext} className="p-2">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
