import React from 'react';
import Banner from '../../components/Banner';
import Feature from '../../components/Feature';
import Header from '../../components/Header';
import { PageContainer } from '../../components/styles';

const HomePage = () => {
  return (
    <PageContainer>
      <Header isHomePage />
      <Banner />
      <Feature />
    </PageContainer>
  );
};

export default HomePage;
