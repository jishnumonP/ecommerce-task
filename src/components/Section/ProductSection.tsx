import React, { useState } from 'react';
import image23 from '../../assets/images/23.png';
import image24 from '../../assets/images/24.png';
import image25 from '../../assets/images/25.png';
import image26 from '../../assets/images/26.png';
import image27 from '../../assets/images/27.png';
import image28 from '../../assets/images/28.png';
import image29 from '../../assets/images/29.png';
import image30 from '../../assets/images/30.png';

type Product = {
  id: number;
  imageUrl: string;
  sale?: boolean;
};

const products: Product[] = [
  { id: 1, imageUrl: image23 },
  { id: 2, imageUrl: image24 },
  { id: 3, imageUrl: image25 },
  { id: 4, imageUrl: image26 },
  { id: 5, imageUrl: image27 },
  { id: 6, imageUrl: image28 },
  { id: 7, imageUrl: image29 },
  { id: 8, imageUrl: image30 }
];

const categories = ['All Products', 'T-shirts', 'Hoodies', 'Jackets'];

const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(product => product?.category === selectedCategory);

  return (
    <div className="container mx-auto my-8 p-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Subscribe To The Newsletter</h2>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <nav className="flex space-x-4 mb-4 md:mb-0">
          {categories.map(category => (
            <button
              key={category}
              className={`px-3 py-2 rounded ${selectedCategory === category ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
        <button className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300">Filter</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
            <img src={product.imageUrl} alt={`Product ${product.id}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
