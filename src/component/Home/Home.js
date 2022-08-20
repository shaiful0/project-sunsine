import React from 'react';
import Banner from './Banner';
import ExtraOne from './ExtraOne';
import ExtraTwo from './ExtraTwo';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ExtraTwo></ExtraTwo>
      <ExtraOne></ExtraOne>
    </div>
  );
};

export default Home;