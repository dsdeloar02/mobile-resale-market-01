import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import PhoneCategory from '../PhoneCategory/PhoneCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhoneCategory></PhoneCategory>
            <AdvertiseProduct></AdvertiseProduct>
        </div>
    );
}

export default Home;
