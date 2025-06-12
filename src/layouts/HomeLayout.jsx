import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const HomeLayout = () => {
    return (
        <div>
             <div className='bg-[#f2f6fd]'>
             <Navbar></Navbar>
           </div>
           <div >
             <Outlet></Outlet>
           </div>

            <div>
              <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;