import React from 'react';
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import Header from '../../components/Header';

const HomePage = () => {
  return (
    <div style={{ padding: '3rem 4rem' }}>
      <Header />
      <Banner />
      <Feature />
    </div>
  );
};

export default HomePage;
