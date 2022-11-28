import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../pages/Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
console.log(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
    const order = useLoaderData();
    console.log(order)
    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-6'> PayMent </h1>
            <div className='w-2/3 mx-auto my-7 rounded-md p-8 border shadow-lg' >
                <h1 className='text-xl font-bold mb-2' >Order Summary</h1>
                <div className='flex justify-between my-3 border p-3'>
                    <p className='' > Product Name : </p>
                    <p className='font-semibold' > {order.productName} </p>
                </div>
                <div className='flex justify-between my-3 border p-3'>
                    <p className='' > Product Price : </p>
                    <p className='font-semibold' > {order.resalePrice} $ </p>
                </div>
                <div className='flex justify-between my-3 border p-3'>
                    <p className='' > Deliver Charge : </p>
                    <p className='font-semibold' > 12 $ </p>
                </div>
                <div className='w-full border mt-4 rounded-md'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
}

export default Payment;
