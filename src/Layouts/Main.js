import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import SideNavbar from './Pages/Share/SideNavbar/SideNavbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='lg:grid grid-cols-4 mb-12'>
                <SideNavbar></SideNavbar>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;