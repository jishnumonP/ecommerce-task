// src/App.tsx
import React from 'react';
import TopAlertBar from './components/TopAlert/TopAlertBar';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import ProductList from './components/Card/ProductCard';
import Footer from './components/Footer/Footer';


const App: React.FC = () => {
  return (
    <div className="App">
      <TopAlertBar />
      <Header />
      <MainContent />
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
