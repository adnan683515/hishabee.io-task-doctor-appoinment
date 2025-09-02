import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='min-h-[calc(100vh-205\px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;