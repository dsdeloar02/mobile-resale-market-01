import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Google from '../../assests/icon/google_logo.svg';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hook/useToken';

const SignUp = () => {
    const { createUser, updateUser, logOut, googleProviderLogin } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
      navigate('/')
    }

    

    // const time = format(new Date(created_at).getTime(), 'PP')

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userstatus = form.userstatus.value;
        // const time = new Date();

        // const newTime = format(new Date.getTime(), 'PP')
        console.log(name, email, password, userstatus)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created SuccessFully');
                const userInfo = {
                    displayName : name
                }
                updateUser(userInfo)
                .then(() => {
                  saveUser(name, email, userstatus);
                })
                .catch((error) => {
                  signUpError(error)
                });
                logOut();
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }


    const handleGoogleSignIn = () =>{
      const googleprovider = new GoogleAuthProvider();
      googleProviderLogin(googleprovider)
      .then(result => {
        const user = result.user;
        const userstatus = 'buyer'
        const userInfo = {
          displayName : user.name
          }
          updateUser(userInfo)
          .then(() => {
            saveUser(user.name, user.email, userstatus);
          })

        console.log(user)
        setSignUPError('')
      })
      .catch(err => {
        console.log('error :', err)
        setSignUPError(err.message)
      })
    };


    const saveUser = (name, email, userstatus) =>{
      const user ={name, email, userstatus};
      fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          setCreatedUserEmail(email);
      })
  }
    
  return (
    <div className="shadow-md py-5 bg-pink-200 dark:bg-slate-800 dark:text-gray-100">
      <div className="w-[90%] mx-auto rounded-xl bg-white dark:bg-gray-700">
        <div className="max-w-screen-md mx-auto p-5">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Sign <span className="text-indigo-600">Up</span>
            </h3>
          </div>

          <form onSubmit={handleSignUp} className="w-1/2 mx-auto shadow-md border p-8 rounded">
            <div className="flex flex-wrap -mx-3 ">


                <div className='mx-3 mb-3 w-full'>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">As a Seller Or Buyer</label>
                    <div className="flex justify-between mt-2 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3  ">
                        <div className="w-1/2">
                            <input type="radio" id="Seller" name="userstatus" value="seller"  checked/>
                            <label className="ml-3"  for="Seller">Seller</label>
                        </div>

                        <div className="w-1/2">
                            <input type="radio" id="Buyer" name="userstatus" value="buyer"/>
                            <label className="ml-3" for="Buyer">Buyer</label>
                        </div>
                    </div>
                </div>


              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                    Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="text"
                  name="name"
                  placeholder="Enter Your  Name"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  name="email"
                  placeholder="ex@gmail.com"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="password"
                  name="password"
                  placeholder="**********"
                />
              </div>

              {/* <select name="slot" className="select select-bordered w-full">
              <option
                            value={name}
                 >{slot}</option  
              </select> */}

              <button className="w-full bg-gray-600 py-3 text-white font-bold mx-3 mt-2 rounded" >Submit</button>

              <span className="text-center my-3 w-full " > Or </span>


              <p className="mt-3 w-full text-center" >Allready register ? <Link to='/signup' className="text-cyan-500 font-bold" >Log in</Link></p>

            </div>
          </form>
          <button onClick={handleGoogleSignIn} className="w-full border py-3 text-gray-600 mx-3 mt-2 rounded flex justify-center shadow-md" >
            <img src={Google} alt="" />
              <p className="ml-2">Sign Up with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
