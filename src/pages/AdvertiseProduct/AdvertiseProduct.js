import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import AdvertiseCard from './AdvertiseCard';

const AdvertiseProduct = () => {
    const [advProducts, setAdvProducts] = useState('');
    const isAdvertise = 'true';

    const { data: adproducts = [], isLoading } = useQuery({
                queryKey: ["adproducts"],
                queryFn: async () => {
                const res = await fetch(`http://localhost:5000/advertisProducts?advertise=${isAdvertise}`);
                const data = await res.json();
                setAdvProducts(data)
            }
        });

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div >
            
            {
                (advProducts.length) && <>
                    <h1 className='text-center my-5 text-3xl font-bold' >Flash Sale</h1>
                    <div className='w-[80%] mx-auto flex flex-wrap justify-between my-8'>
                        {
                            advProducts.map(advProduct => <AdvertiseCard
                                advProduct={advProduct}
                            ></AdvertiseCard> ) 
                        }
                    </div>
                </>
            }
        </div>
    );
}

export default AdvertiseProduct;
