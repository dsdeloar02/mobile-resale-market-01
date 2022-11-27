import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TotolSellerTable from './TotolSellerTable';

const TotalSeller = () => {
    
    const sellers = useLoaderData();
    
    return (
        <div>
            <h1>All seller</h1>
            <div>
            <div className="overflow-x-auto w-full">
        <table className="table w-[80%] mx-auto">
          <thead >
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Verify</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                sellers.map(seller =>
                    <TotolSellerTable
                    seller={seller}
                    ></TotolSellerTable>    
                )
            }
          </tbody>
        </table>
      </div>
            </div>
        </div>
    );
}

export default TotalSeller;
