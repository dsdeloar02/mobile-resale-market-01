import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';

const SingleCategory = ({categoryProduct, setBookingProducts}) => {
    const {user} = useContext(AuthContext);
    const [checkVerify, setCheckVerify] = useState(false);
    const {productName, productImage, resalePrice, orginalPrice, usedYears, sellerName, categoryName, postDate, sellerEmail } = categoryProduct;
    console.log(categoryProduct)

    useEffect(() => {
        fetch(`https://mobile-market-server-five.vercel.app/user-verify?sellerEmail=${sellerEmail}`)
        .then(res => res.json())
        .then(data =>{
            setCheckVerify(data.result)
            console.log(data.result);
        })
    })

    const handleWhistlist = () => {
        const whistList = {
            productName,
            productImage,
            resalePrice,
            orginalPrice,
            usedYears,
            sellerName,
            postDate,
            categoryName,
            email: user.email
        }
        fetch('https://mobile-market-server-five.vercel.app/whistlists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(whistList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookingProducts(null);
                    toast.success(' Added Whistlist');
                    // refetch();
                }
                else{
                    toast.error(data.message);
                }
            })

        console.log(whistList);
        setBookingProducts(null);
    }



   

    return (  
    <div className='w-full md:w-[49%] lg:w-[30%] my-2 rounded shadow-md border p-6 flex flex-col justify-between'>
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
             <p className='flex items-center'>Seller : {sellerName} 
                 {
                     checkVerify && <div className='mx-2 '> <FaCheckCircle className='text-green-800'></FaCheckCircle> </div>
                 }
              </p>
             <div className='flex justify-between my-2'>
                 <label 
                     htmlFor="buyingModal"
                     onClick={() => setBookingProducts(categoryProduct)}
                     className='bg-cyan-600 py-2 px-3 text-white '> <p><BsFillCartFill></BsFillCartFill></p> </label>
                 <button onClick={handleWhistlist} className='bg-cyan-600 py-2 px-3 text-white'> <BsFillHeartFill></BsFillHeartFill> </button>
             </div>
             <p className='text-center' >Date : {postDate} </p>
         </div>
    );
}

export default SingleCategory;
