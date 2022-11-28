import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey:['orders', user?.email],
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

    console.log(orders)


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
              <th>Location</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                orders.map(order =>
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
                              src={order.productImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{order.productName}</div>
                          <div className="text-sm opacity-50">{order.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {order.location}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        
                      </span>
                    </td>
                    <td>{order.phone}</td>
                    <td>
                      {
                        order.resalePrice && !order.paid && <Link to={`/dashboard/payment/${order._id}`} className="py-2 px-3 bg-cyan-500 text-white rounded-md">Pay Now</Link>
                      }
                      {
                        order.resalePrice && order.paid && <Link to={`/dashboard/payment/${order._id}`} className="py-2 px-3 bg-cyan-500 text-white rounded-md">Paid</Link>
                      }
                      
                    </td>
                  </tr>    
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
