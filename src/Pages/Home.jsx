import React from 'react';
import Trainer from './Trainer';
// import FeaturedGroups from './FeatureGroup';
// import MyGroupsPage from './MyGroup';
// import FeaturedCard from './FeaturedCard';
// import MakeYourGroup from '../components/MakeYourGroup';
// import FIndHobby from '../components/FIndHobby';

const Home = () => {
  return (
    <div>
      <section>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.postimg.cc/vmrnSbxz/two-female-sprinter-athletes-running-treadmill-race-training-athletics-stadium.jpg"
              className="max-w-full  lg:w-full h-screen object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.postimg.cc/RV2nSNcd/smile-corporate-skyscraper-teeth-bare.jpg"
              className="max-w-full  lg:w-full  h-screen object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.postimg.cc/3wFyF1zf/finance-office-building-sunlight-focused-sunny.jpg"
              className="max-w-full  lg:w-full  h-screen object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </section>



      <section>
          <Trainer></Trainer>
      
      </section>

      <section>
        {/* <MakeYourGroup></MakeYourGroup> */}
      </section>
      <section>
        {/* <FIndHobby></FIndHobby> */}
      </section>

    </div>
  );
};

export default Home;