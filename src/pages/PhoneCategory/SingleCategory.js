import React from 'react';
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";

const SingleCategory = ({categoryProduct}) => {
    const { productName, productImage, resalePrice, orginalPrice, usedYears, sellerName, postDate } = categoryProduct;
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
            <p className='pb-2' > Used : {usedYears}</p>
            <p>Seller : {sellerName}</p>
            <div className='flex justify-between my-2'>
                <button className='bg-cyan-600 py-2 px-3 text-white'> <BsFillCartFill></BsFillCartFill> </button>
                <button className='bg-cyan-600 py-2 px-3 text-white'> <BsFillHeartFill></BsFillHeartFill> </button>
            </div>
            <p className='text-center' >Date : {postDate} </p>
        </div>
    );
}

export default SingleCategory;
