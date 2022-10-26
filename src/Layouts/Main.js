import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Share/Footer/Footer';
import Nav from './Pages/Share/NavBar/Nav';
import SideNavbar from './Pages/Share/SideNavbar/SideNavbar';

const Main = () => {
    return (
        <div>

            <Nav></Nav>
            <div className='lg:grid grid-cols-4 mb-12'>
                <div className='hidden lg:grid'>
                    <SideNavbar></SideNavbar>
                </div>

                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;