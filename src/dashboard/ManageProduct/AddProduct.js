import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    console.log(user.displayName);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const resalePrice = form.resalePrice.value;
        const orginalPrice = form.orginalPrice.value;
        const categoryName = form.categoryName.value;
        const usedYears = form.usedYears.value;
        const image = form.productImage.files;
        const productImage = image[0];
        const formData = new FormData();
        formData.append('image', productImage);
        const advertise = 'false';
        console.log(productName, resalePrice, orginalPrice, categoryName, productImage )

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url)
                const product = {
                    sellerName : user.displayName,
                    sellerEmail : user.email,
                    productName,
                    resalePrice,
                    orginalPrice,
                    categoryName, 
                    usedYears,
                    advertise,
                    productImage: imgData.data.url,
                    postDate: format(new Date(), "PP")
                }

                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`Product is added successfully`);
                    navigate(`/dashboard/myproducts/${user.displayName}`)
                })
            }
        })
    // console.log(data);
    }

    return (
        <div className='w-[80%] mx-auto bg-white rounded-md p-10'>
            <h2 className='w-full text-center text-xl font-bold my-4'>Add Products</h2>
            <form onSubmit={handleAddProduct} className="w-2/3 mx-auto shadow-md border p-8 rounded">
            <div className="flex flex-wrap -mx-3 ">


              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                    Product Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="text"
                  name="productName"
                  placeholder="Enter Your Product Name"
                />
              </div>
              <div className='flex justify-between'>

                <div className="w-[49%] px-3">
                    <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Orginal Price
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="number"
                    name="orginalPrice"
                    placeholder="Enter Orginal Price"
                    />
                </div>
                <div className="w-[49%] px-3">
                    <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Resale Price
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="number"
                    name="resalePrice"
                    placeholder="Enter Resale Price"
                    />
                </div>                

              </div>
              <div className="w-full px-3">
                    <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Select Category
                    </label>
                    <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="number"
                    name="categoryName"
                    placeholder="Used Years"
                    >
                        <option value="Samsung">Samsung</option>
                        <option value="Realme">Realme</option>
                        <option value="Redmi">Redmi</option>
                        <option value="Apple">Apple</option>
                    </select>
              </div>
              <div className="w-full px-3">
                    <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Add Product Image
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="file"
                    name="productImage"
                    />
              </div>
              <div className="w-full px-3">
                    <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Used Years
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="number"
                    name="usedYears"
                    placeholder="Used Years"
                    />
              </div>

              <button className="w-full bg-gray-600 py-3 text-white font-bold mx-3 mt-2 rounded" >Submit</button>

              

              

            </div>
          </form>
        </div>
    );
}

export default AddProduct;
