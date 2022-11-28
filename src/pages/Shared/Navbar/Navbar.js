import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../context/AuthProvider';
import useSeller from '../../../hook/useSeller';
// import {BsFillBrightnessHighFill }  from "react-icons/bs";
// import { CiDark } from "react-icons/ci";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState('light');
    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])



    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
             })
            .catch(err => console.log(err));
            
    }

    return (
        <div>
             <div className='shadow-md bg-slate-800'  >
            <div className="container w-5/6 md:w-full mx-auto md:flex justify-between py-6">
                <div className='flex items-center text-slate-600 w-[300px]'>
                    <h1 className='font-bold  md:text-xl lg:text-2xl text-white'>Mobile Mela </h1>
                </div>

                <div onClick={() =>setOpen(!open)} className="absolute right-4 top-6 cursor-pointer md:hidden" >
                    {
                        open ? <XMarkIcon className="h-7 w-7 text-red-500 "/> :  <Bars3Icon className="h-7 w-7 text-red-500" /> 
                    }           
                </div>

                <ul
                   className={`bg-slate-800 md:bg-transparent py-5 md:py-0 md:flex md:justify-end md:items-center absolute w-full left-0 md:static  transition-all duration-500 ease-in z-50 ${open ? 'top-18' : 'top-[-500px]'}  `} 
                 
                 >
                    <li className='mx-2 mb-2 md:mb-0  py-2 px-2 lg:px-4 dark:text-gray-100 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-400 hover:to-pink-700'>
                        <NavLink to='/' >Home</NavLink>
                    </li>
                    <li className='mx-2 py-2 mb-2 md:mb-0 px-2 lg:px-4 dark:text-gray-100 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-400 hover:to-pink-700'>
                        <NavLink to='/blogs' >Blog Page</NavLink>
                    </li>
                    {
                        user?.uid ? 
                        <>
                            <button className='w-full mx-2 py-2 px-2 lg:px-4 dark:text-gray-100 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-400 hover:to-pink-700' onClick={handleLogOut} >Sign Out</button>
                        
                            <li className='mx-2 my-2 py-2 px-2 lg:px-4 dark:text-gray-100 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-400 hover:to-pink-700'>
                                <NavLink to='/dashboard' > DashBoard </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li className='mx-2 my-2 py-2 px-2 lg:px-4 dark:text-gray-100 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-400 hover:to-pink-700'>
                                <NavLink to='/login' >Log In</NavLink>
                            </li>
                        </>
                    }

                </ul>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
