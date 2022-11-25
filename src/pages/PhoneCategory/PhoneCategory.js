import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const PhoneCategory = () => {

    const url = `http://localhost:5000/categories`;

    const { data: categories, isLoading } = useQuery({
        queryKey:['categories'],
        queryFn : () => fetch(url)
        .then(res => res.json())
    })

    console.log(categories)

    if(isLoading){
        return <p>Loading ... </p>
    }
    // const {_id, category-name, category-img } = categories;

    return (
        <div className='w-[80%] mx-auto my-3'>
            <h1 className='my-6 text-4xl font-bold text-center' >All Categories</h1>
            <div className='flex justify-between flex-wrap'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
}

export default PhoneCategory;
