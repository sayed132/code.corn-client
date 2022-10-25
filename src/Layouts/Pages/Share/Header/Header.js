import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../Assets/logo/logo.svg'
import { AuthContext } from '../../../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-slate-400 mb-12 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Homepage</Link></li>
                        <li><Link to={'/course'}>Course</Link></li>
                        <li><Link to={'/login'}>Get Premium</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        <li><Link to={'/login'}>About</Link></li>
                        <li><Link to={'/login'}>About</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center"> <img className='h-10 w-full object-cover md:h-full md:w-10' src={logo} alt="" />
                <Link to={'/'} className="btn btn-ghost normal-case text-xl font-bold">Code With Rafsan</Link>
            </div>
            <div className="navbar-end">
                
                <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <button className="py-2 mx-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleLogOut}>Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link className="py-2 mx-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" to='/login'><button>LogIn</button></Link>
                                        
                                        <Link className="py-2 mx-1 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" to='/register'><button>Register</button></Link>
                                        
                                    </>
                            }


                        </>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Header;