import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BuyingModal = ({bookingProducts, setBookingProducts}) => {
    const { user } = useContext(AuthContext);
    const { productName, productImage, resalePrice, _id } = bookingProducts;

    console.log(_id)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const productName = form.productName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const resalePrice = form.resalePrice.value;
        const location = form.location.value;
        console.log(productName, resalePrice);

        const order = {
            buyer: name,
            productName,
            email,
            resalePrice,
            phone,
            location,
            productImage,
            productsId: _id
        }

        fetch('https://mobile-market-server-five.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookingProducts(null);
                    toast.success('Booking confirmed');
                    // refetch();
                }
                else{
                    toast.error(data.message);
                }
            })

        console.log(order);
        setBookingProducts(null);
    }
    

    return (
        <div>
            <input type="checkbox" id="buyingModal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="buyingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handleBooking}>
                    <label>Name :</label>
                    <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered mb-2" />
                    <label>Email : </label>
                    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered mb-2" />
                    <label>Product Name: </label>
                    <input name="productName" type="text" defaultValue={productName} disabled  className="input w-full input-bordered mb-2" />
                    <label>Resale Price : </label>
                    <input name="resalePrice" type="text" defaultValue={resalePrice} disabled  className="input w-full input-bordered mb-2" />

                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered mb-2" required />
                    <input name="location" type="text" placeholder="Enter Location" className="input w-full input-bordered" required />
                    <button type='submit' value="Submit" className='flex justify-center py-2 px-4 bg-cyan-400 mt-3 w-[150px] mx-auto'  >Submit</button>
                </form>
            </div>
            </div>
        </div>
    );
}

export default BuyingModal;
