import React from 'react';
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";

const AdvertiseCard = ({advProduct}) => {
    const { productName, productImage, resalePrice, orginalPrice, usedYears, sellerName, postDate } = advProduct;
    const setBookingProducts = () => {

    }
    return (
        <div className='w-[30%] my-2 rounded shadow-md border p-6'>
            <p className='text-center font-bold text-xl' >{productName}</p> 
            <img className='w-[200px] mx-auto' src={productImage} alt="" />
            <div className='my-3 p-2 border rounded'>
                <p className='font-bold'>Price : </p>
                <div className='flex justify-between'>
                    <p> Orginal :{orginalPrice}$</p>
                    <p> Resale :{resalePrice}$</p>
                </div>
            </div>
            <p className='pb-2' > Used : {usedYears} Years</p>
            <p>Seller : {sellerName} <span className='text-sm bg-gray-300 rounded-xl px-2' >pending</span> </p>
            <div className='flex justify-between my-2'>
                <label 
                    htmlFor="buyingModal"
                    onClick={() => setBookingProducts(advProduct)}
                    className='bg-cyan-600 py-2 px-3 text-white '> <p><BsFillCartFill></BsFillCartFill></p> </label>
                <button className='bg-cyan-600 py-2 px-3 text-white'> <BsFillHeartFill></BsFillHeartFill> </button>
            </div>
            <p className='text-center' >Date : {postDate} </p>
        </div>
    );
}

export default AdvertiseCard;
