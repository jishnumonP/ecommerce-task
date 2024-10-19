import React from 'react';
import StarRating from '../StartRating/StarRating';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';
import image7 from '../../assets/images/7.png';
import image8 from '../../assets/images/8.png';
import FiveImagesRow from '../FiveImage/FiveImagesRow';
import ExploreStyles from '../ExploreStyle/ExploreStyles';
import ProductsSection from '../Section/ProductSection';
import FullImageSection from '../FullImageSection/FullImageSection';
import BestSellersSection from '../BestSeller/BestSellerSection';
import InstagramFollowSection from '../InstaFollowSection/InstaFollow';
import ReviewsSection from '../Reviews/Reviews';
import DressStyle from '../DressStyle/DressStyle';
interface Product {
  id: number;
  name: string;
  rating: number;
  price: number;
  originalPrice?: number;
  image: string;
  section: string;
}

const products: Product[] = [
  { id: 1, name: 'T-shirt with Tape Details', rating: 4.5, price: 120, image: image1, section: 'newArrivals' },
  { id: 2, name: 'Skinny Fit Jeans', rating: 4.6, price: 240, originalPrice: 260, image: image2, section: 'newArrivals' },
  { id: 3, name: 'Checkered Shirt', rating: 4.7, price: 180, image: image3, section: 'newArrivals' },
  { id: 4, name: 'Sleeve Striped T-shirt', rating: 4.3, price: 130, originalPrice: 160, image: image4, section: 'newArrivals' },
  { id: 5, name: 'Vertical Striped Shirt', rating: 5.0, price: 212, originalPrice: 232, image: image5, section: 'topSelling' },
  { id: 6, name: 'Courage Graphic T-shirt', rating: 4.0, price: 145, image: image6, section: 'topSelling' },
  { id: 7, name: 'Loose Fit Bermuda Shorts', rating: 3.5, price: 80, image: image7, section: 'topSelling' },
  { id: 8, name: 'Faded Skinny Jeans', rating: 4.2, price: 210, image: image8, section: 'topSelling' }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="card hover:bg-gray-100 p-4 border rounded-lg transform transition-transform duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {product.originalPrice && (
          <span className="text-red-500 font-bold">Sale</span>
        )}
        <StarRating rating={product.rating} />
        <div className="flex items-center">
          {product.originalPrice && (
            <span className="line-through mr-2">${product.originalPrice}</span>
          )}
          <span className="text-lg font-bold">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

const ProductList: React.FC = () => {
  const newArrivals = products.filter(product => product.section === 'newArrivals');
  const topSelling = products.filter(product => product.section === 'topSelling');

  return (
    <div className="container mx-auto">
      <div className="bg-black text-white p-4 flex justify-between">
        <span>ZARA</span>
        <span>GUCCI</span>
        <span>PRADA</span>
      </div>
      <h2 className="text-2xl font-bold my-4 text-center">NEW ARRIVALS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {newArrivals.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <span className="text-black">View All</span>
      </div>
      <h2 className="text-2xl font-bold my-4 text-center">TOP SELLING</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topSelling.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <span className="text-black">View All</span>
      </div>
      <DressStyle/>
<FiveImagesRow/>
<ExploreStyles/>
<ProductsSection/>
<FullImageSection/>
<BestSellersSection/>
<InstagramFollowSection/>
<ReviewsSection/> 
    </div>
  );
};

export default ProductList;



 







