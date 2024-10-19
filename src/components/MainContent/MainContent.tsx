
import mobileui from '../../assets/images/mobileui.png';

const MainContent = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-50">
      {/* Left Text Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find Clothes That Matches Your Style
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="w-full md:w-auto mt-6 bg-black text-white py-3 px-6 rounded-full text-lg">
  Shop Now
</button>




        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8 mt-8">
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold">200+</p>
              <p className="text-gray-500">International Brands</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold">2,000+</p>
              <p className="text-gray-500">High-Quality Products</p>
            </div>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <p className="text-2xl md:text-3xl font-bold">30,000+</p>
            <p className="text-gray-500">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="mt-8 md:mt-0 md:w-1/2">
        <img src={mobileui} alt="Clothing" className="w-full h-auto object-cover" />
      </div>
    </main>
  );
};

export default MainContent;
