import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MysingleProduct = ({sellerProduct}) => {
    const {_id, postDate, productImage, productName, sellerName, orginalPrice, resalePrice, usedYears } = sellerProduct;
    const navigate = useNavigate();

    const handleAdvertise = () => {
        const advProduct = {
            productName,
            productImage,
            sellerName,
            resalePrice,
            orginalPrice,
            usedYears,
            postDate
        };
        fetch('http://localhost:5000/advertisProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advProduct)
        })
        .then(res => res.json())
        .then(data =>{
              if(data.acknowledged === true){
                toast('advertised success fully')
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
        <div className="card w-[48%] bg-base-100 shadow-xl my-2">
            <figure><img src={productImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {productName}
                <div className="badge badge-secondary">Available</div>
                </h2>
                <div className="card-actions justify-end my-2">
                <button onClick={handleAdvertise} className="badge bg-green-500 ">Advertise</button> 
                <button onClick={handleDelteBtn} className="badge bg-red-800">Delete</button>
                </div>
            </div>
        </div>
                        
    );
}

export default MysingleProduct;
