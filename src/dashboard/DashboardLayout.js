import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hook/useAdmin';
import useBuyer from '../hook/useBuyer';
import useSeller from '../hook/useSeller';
import Navbar from '../pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email) ;
    const [isBuyer] = useBuyer(user?.email) ;

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>

               
                <div className="drawer-side">
                    <ul className={`bg-gradient-to-r from-green-400 to-blue-500 w-80 h-screen py-6`}>
                        {
                            isAdmin && <>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to="/dashboard/allusers">All Seller</Link></li>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to="/dashboard/adddoctor">All buyer</Link></li>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to="/dashboard/managedoctors">Reported Items</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li className='py-2 px-5 mx-3 rounded bg-slate-400 my-2 hover:bg-slate-100 '><Link to="/dashboard/myorders">My Orders</Link></li>
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
            </div>
        </div>
    );
}

export default DashboardLayout;