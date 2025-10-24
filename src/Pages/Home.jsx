import React from 'react';
import Trainer from './Trainer';
import Session from './Session';
import FeaturedEvents from './FeaturedEvents';
import { Helmet } from 'react-helmet';
import Banner from './Banner';
import StatsSection from './StatsSection';
import Comment from './Comments';
import ScrollToTop from '../Components/ScrollToTop';
import EventCalendar from '../Components/EventCalendar';
import ContactSection from './ContactSection';


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
        <EventCalendar></EventCalendar>
      </section>
      <section>
        <ContactSection/>
      </section>

      <section>
        <Session></Session>
      </section>
      <section>
        <Comment></Comment>
      </section>
      <section>
        <StatsSection></StatsSection>
      </section>
    <section>
      <ScrollToTop/>
    </section>


    </div>
  );
};

export default Home;