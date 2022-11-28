import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MywhistList = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/whistlists?email=${user?.email}`;

    const { data: whistlists = [] } = useQuery({
        queryKey:['whistlists', user?.email],
        queryFn : async () => {
            const res = await fetch(url, {
                headers : {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data ;
        }
    })

    console.log(whistlists)

    return (
        <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                whistlists.map(whistlist =>
                    <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={whistlist.productImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{whistlist.productName}</div>
                          <div className="text-sm opacity-50">{whistlist.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                       Price : {whistlist.resalePrice} $
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Used {whistlist.usedYears} years
                      </span>
                    </td>
                    <td>{whistlist.postDate}</td>
                    <td> 
                        <Link to={`/products/${whistlist.categoryName}`} className="py-2 px-3 bg-cyan-500 text-white rounded-md">Buy Now</Link>
                      
                    </td>
                  </tr>    
                )
            }
          </tbody>
        </table>
      </div>
    </div>
    );
}

export default MywhistList;
