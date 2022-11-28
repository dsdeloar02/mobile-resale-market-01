import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AllBuyerTable = ({buyer}) => {
    const navigate = useNavigate();
    const {_id, name, email, userstatus} = buyer;

    // const handleVerify = (id) => {
    //     console.log(id)
    //     fetch(`https://mobile-market-server-five.vercel.app/users/admin/${id}`, {
    //         method : 'PUT'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.modifiedCount > 0){
    //             toast.success('veryfied success')
    //             navigate(`/dashboard/allseller/${userstatus}`)
    //         }
    //     })
    // }

    const handleDelete = () => {
        const agree = window.confirm(`Are you sure you want to delete : ${name}`)
        console.log(agree)
        if(agree){
            fetch(`https://mobile-market-server-five.vercel.app/buyer/${_id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast.success('user delete successfullly')
                    navigate(`/dashboard/allbuyer/${userstatus}`)
                }
            })
            console.log(_id)
        }
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>{userstatus}</td>
            {/* <td>
                {
                    buyer?.status !== 'verified' &&  <button onClick={() => handleVerify(_id)} className="py-2 px-3 bg-cyan-500 text-white rounded-md">Verify</button>
                }
            </td> */}
            <td>
                <button onClick={handleDelete} className="py-2 px-3 bg-cyan-500 text-white rounded-md">Delete</button>
            </td>
        </tr>
    );
}

export default AllBuyerTable;