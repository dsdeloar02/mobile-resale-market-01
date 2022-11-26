import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hook/useAdmin';
import useBuyer from '../../hook/useBuyer';
import useSeller from '../../hook/useSeller';

const AllSeller = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email) ;
    const [isBuyer] = useBuyer(user?.email) ;
    return (
        <div>

            <ul className={`bg-gradient-to-r from-pink-400 w-full flex justify-center items-center h-screen py-6`}>
                        {
                            isAdmin && <>
                                <div class="text-3xl font-extrabold ...">
                                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                        Wellcome to Dashboard Mr.Admin 
                                    </span>
                                </div>
                            </>
                        }
                        {
                            isBuyer && <>
                                <div class="text-3xl font-extrabold ...">
                                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                        Wellcome to Dashboard As Buyer 
                                    </span>
                                </div>
                            </>
                        }
                        {
                            isSeller && <>
                                <div class="text-3xl font-extrabold ...">
                                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                        Wellcome to Dashboard As Buyer 
                                    </span>
                                </div>
                            </>
                        }

                    </ul>
        </div>
    );
}

export default AllSeller;
