import React from 'react';
import Trainer from './Trainer';
import Session from './Session';
import FeaturedEvents from './FeaturedEvents';
import { Helmet } from 'react-helmet';
import Banner from './Banner';


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
      </section>

    </div>
  );
};

export default Home;