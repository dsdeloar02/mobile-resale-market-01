import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBuyerTable from './AllBuyerTable';

const AllBuyer = () => {
    
    const buyers = useLoaderData();
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-6'>All seller</h1>
            <div>
            <div className="overflow-x-auto w-full">
        <table className="table w-[80%] mx-auto">
          <thead >
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                buyers.map(buyer =>
                    <AllBuyerTable
                    buyer={buyer}
                    ></AllBuyerTable>    
                )
            }
          </tbody>
        </table>
      </div>
            </div>
        </div>
    );
}

export default AllBuyer;