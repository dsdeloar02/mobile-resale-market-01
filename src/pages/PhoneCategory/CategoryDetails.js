import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import SingleCategory from './SingleCategory';

const CategoryDetails = () => {
    const categoryProducts = useLoaderData();

    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    

    
    return (
        <div>
            <h1>Category Details {categoryProducts.length} </h1>
            
            <div className='w-[80%] mx-auto flex flex-wrap justify-between my-8'>
                {
                    categoryProducts.map(categoryProduct => <SingleCategory
                        key={categoryProduct._id}
                        categoryProduct={categoryProduct}
                    ></SingleCategory>)
                }
            </div>

        </div>
    );
}

export default CategoryDetails;
