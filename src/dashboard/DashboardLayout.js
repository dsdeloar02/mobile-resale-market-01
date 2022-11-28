import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hook/useAdmin';
import useBuyer from '../hook/useBuyer';
import useSeller from '../hook/useSeller';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const userStatus = 'seller';
    const userStatusTow = 'buyer';

    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email) ;
    const [isBuyer] = useBuyer(user?.email) ;


    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-wrap justify-between'>
                <div className="w-full md:w-full lg:w-[25%] ">
                    <ul className={` flex flex-wrap justify-center w-full md:w-full md:flex lg:block bg-gradient-to-r from-green-400 to-blue-500 lg:w-80 lg:h-screen py-6`}>
                        {
                            isAdmin && <>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to={`/dashboard/allseller/${userStatus}`}>All Seller</Link></li>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to={`/dashboard/allbuyer/${userStatusTow}`}>All buyer</Link></li>
                                {/* <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to="/dashboard/managedoctors">Reported Items</Link></li> */}
                            </>
                        }
                        {
                            isBuyer && <>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to="/dashboard/myorders">My Orders</Link></li>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to="/dashboard/mywhistlist">My Whistlist</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to='/dashboard/addproducts' >Add a Product</Link></li>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to={`/dashboard/myproducts/${user.displayName}`}>My Products</Link></li>
                            </>
                        }

                    </ul>
                </div>
                <div className="w-full md:w-full lg:w-[75%]">
                    <Outlet></Outlet>
                </div>            
            </div>
        </div>
    );
}

export default DashboardLayout;