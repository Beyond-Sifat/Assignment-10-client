import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {

    const { user, logOutUser } = use(AuthContext)
    console.log(user)


    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("signout")
            })
            .catch(error => {
                console.log(error)
            })
    }
    const links = <>
        <li><NavLink className={({ isActive }) => isActive ? "" : ""} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "" : ""} to='/login'>Login</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "" : ""} to='/register'>Register</NavLink></li>
        {user ? <>
            <li><NavLink className={({ isActive }) => isActive ? "" : ""} to='/profile'>My Profile</NavLink></li>
        </> : <li><NavLink className={({ isActive }) => isActive ? "" : ""} to='/profile'>Profile</NavLink></li>
        }



    </>
    return (
        <div className="navbar bg-base-100 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-400 shadow-sm text-white">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">CareerZ</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2  bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-400 shadow-sm border-dotted border-2 border-black">
                        {/* {
                            user && <span className='mx-4'>{user.email}</span>
                        } */}
                        {links}
                    </ul>
                </div>
                {user ?
                    <>
                        <span className='mx-4 max-md:hidden'>{user.email}</span>
                        <a onClick={handleLogOut} className="">Sign out</a>
                    </> :
                    <Link to='/login'>Login</Link>}
                {/* <button className="btn lg:inline-block ml-2">Register</button> */}
            </div>
        </div>
    );
};

export default Navbar;