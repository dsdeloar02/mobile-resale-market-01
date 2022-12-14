import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const { resalePrice, productName, email, _id, productsId } = order;
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        // Create PaymentIntent as soon ruas the page loads
        fetch("https://mobile-market-server-five.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);

    console.log(resalePrice)


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type : 'card',
            card
        })

        if(error){
            console.log(error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email: email
                    },
                },
            },
        );

        if(confirmError){
            setCardError(confirmError.message);
            return;
        }
        console.log(paymentIntent)

        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                resalePrice,
                transactionId: paymentIntent.id,
                email,
                order: _id,
                bookingsId: productsId
            }
            fetch('https://mobile-market-server-five.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);
    }

    return (
        <div className='p-4 w-full'>
        <form onSubmit={handleSubmit}>
            <CardElement
                className='border rounded px-3 py-2 w-full'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-sm font-bold text-red-600'>{cardError}</p>
            <button
                className='w-[200px] mx-auto my-2 bg-cyan-800 text-white py-2 mt-4 '
                type="submit"
                disabled={!stripe || !clientSecret || processing}>
                Pay now
            </button>               
        </form>
        {
            success && <div>
                <p className='text-green-500'>{success}</p>
                {/* <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p> */}
            </div>
        }
    </div>
    );
}

export default CheckoutForm;
