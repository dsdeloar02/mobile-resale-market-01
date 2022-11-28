import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MysingleProduct = ({sellerProduct}) => {
    const {_id,  productImage, productName, sellerName, sold } = sellerProduct;
    const navigate = useNavigate();

    console.log(sellerProduct)

    const handleAdvertise = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/seller/myproducts/${id}`, {
            method : 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('veryfied success')
                // navigate(`/dashboard/allseller/${userstatus}`)
            }
        })
    }

    const handleDelteBtn = (user) => {
        const agree = window.confirm(`Are you sure you want to delete : ${user.name}`)
        console.log(agree)
        if(agree){
            fetch(`http://localhost:5000/sellePproducts/${_id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('user delete successfullly')
                    navigate(`/dashboard/myproducts/${sellerName}`)
                }
            })
            console.log(_id)
        }
    }


    return (
        <div className="card w-full  md:w-[48%] bg-base-100 shadow-xl my-2">
            <figure><img src={productImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {productName}
                <div className="badge badge-secondary">
                    {
                        sold !== true ? <>Avilable</> : <> sold </>
                    }
                </div>
                </h2>
                <div className="card-actions justify-end my-2">
                {
                    sold !== true && <button onClick={() => handleAdvertise(_id)} className="badge bg-green-500 ">Advertise</button> 
                }
                <button onClick={handleDelteBtn} className="badge bg-red-800">Delete</button>
                </div>
            </div>
        </div>
                        
    );
}

export default MysingleProduct;
