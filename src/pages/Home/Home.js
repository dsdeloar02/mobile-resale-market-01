import React from 'react';
import ProductReview from '../../components/ProductReview/ProductReview';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import PhoneCategory from '../PhoneCategory/PhoneCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhoneCategory></PhoneCategory>
            <AdvertiseProduct></AdvertiseProduct>
            <ProductReview></ProductReview>
        </div>
    );
}

export default Home;
