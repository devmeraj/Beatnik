import React from 'react';

import './App.css';

import Header from './components/header/Header.component';
import Search from './components/search/Search.component';
import Services from './components/services/Services.component';
import Products from './components/products/Products.component';
import Insurance from './components/insurance/Insurance.component';
import Quote from './components/quote/Quote.component';
import Support from './components/support/Support.component'; 
import NewsAndEvents from './components/news-and-events/NewsAndEvents.component';
import Awards from './components/awards/Awards.component';
import Footer from './components/footer/Footer.component';
import FooterCopyright from './components/footer-copyright/FooterCopyright.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Services />
      <Products />
      <Insurance />
      <Quote />
      <Support />
      <NewsAndEvents />
      <Awards />
      <Footer />
      <FooterCopyright />
    </div>
  );
}

export default App;
