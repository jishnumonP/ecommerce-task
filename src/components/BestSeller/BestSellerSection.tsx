import React, { useState } from 'react';
import image23 from '../../assets/images/23.png';
import image24 from '../../assets/images/24.png';
import image25 from '../../assets/images/25.png';
import image26 from '../../assets/images/26.png';

type Product = {
  id: number;
  imageUrl: string;
};

const products: Product[] = [
  { id: 1, imageUrl: image23},
  { id: 2, imageUrl: image24 },
  { id: 3, imageUrl: image25 },
  { id: 4, imageUrl: image26}
];

const categories = ['All Products', 'T-Shirt', 'Hoodies', 'Jacket'];

const BestSellersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : [];

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-center">Best Sellers</h2>
        <button className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300">Show All</button>
      </div>
      <div className="flex space-x-4 mb-4 overflow-x-auto">
        {categories.map(category => (
          <button
            key={category}
            className={`px-3 py-2 rounded ${selectedCategory === category ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 relative">
          
            <img src={product.imageUrl} alt={`Product ${product.id}`} className="w-full h-auto object-cover mb-2" />
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersSection;
