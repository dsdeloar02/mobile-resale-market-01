import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BuyingModal from '../buyingModal/buyingModal';
import Loading from '../Shared/Loading/Loading';
import SingleCategory from './SingleCategory';

const CategoryDetails = () => {
    const categoryProducts = useLoaderData();
    const [bookingProducts, setBookingProducts] = useState(null)

    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    

    
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-4' >Category Details  </h1>
            
            <div className='w-[80%] mx-auto flex flex-wrap justify-between my-8'>
                {
                    categoryProducts.map(categoryProduct => <SingleCategory
                        key={categoryProduct._id}
                        categoryProduct={categoryProduct}
                        setBookingProducts={setBookingProducts}
                    ></SingleCategory>)
                }
                {
                    bookingProducts && <BuyingModal
                    bookingProducts={bookingProducts}
                    setBookingProducts={setBookingProducts}
                ></BuyingModal>
                }
            </div>

        </div>
    );
}

export default CategoryDetails;
