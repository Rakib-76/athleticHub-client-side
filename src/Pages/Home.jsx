import React from 'react';
import Trainer from './Trainer';
import Session from './Session';
import FeaturedEvents from './FeaturedEvents';
import { Helmet } from 'react-helmet';
import Banner from './Banner';
import StatsSection from './StatsSection';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <section>
        <Banner></Banner>
      </section>


      <section>
        <FeaturedEvents></FeaturedEvents>
      </section>


      <section>
        <Trainer></Trainer>

      </section>

      <section>
        <Session></Session>
      </section>
      <section>
        <StatsSection></StatsSection>
      </section>

    </div>
  );
};

export default Home;