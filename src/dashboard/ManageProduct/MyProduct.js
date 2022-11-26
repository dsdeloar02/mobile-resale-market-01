import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../pages/Shared/Loading/Loading';
import MysingleProduct from './MysingleProduct';

const MyProduct = () => {
    const sellerProducts = useLoaderData();
    // const [bookingProducts, setBookingProducts] = useState(null)

    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='w-full text-center text-xl font-bold my-4'>My Products</h2>
            <div  className='w-[80%] mx-auto flex flex-wrap justify-between my-8'>
                {
                    sellerProducts.map(sellerProduct => 
                        <MysingleProduct
                          sellerProduct={sellerProduct}
                        ></MysingleProduct>
                    // <li > {sellerProduct.productName} </li>
                    )
                }
            </div>
        </div>
    );
}

export default MyProduct;
