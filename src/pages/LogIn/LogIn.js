import React from "react";
import { Link } from "react-router-dom";
import Google from '../../assests/icon/google_logo.svg';

const LogIn = () => {



  return (
    <div className="shadow-md py-5 bg-pink-200 dark:bg-slate-800 dark:text-gray-100">
      <div className="w-[90%] mx-auto rounded-xl bg-white dark:bg-gray-700">
        <div className="max-w-screen-md mx-auto p-5">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Log  <span className="text-indigo-600">In</span>
            </h3>
          </div>

          <form className="w-1/2 mx-auto shadow-md border p-8 rounded">
            <div className="flex flex-wrap -mx-3 ">

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


              <button className="w-full bg-gray-600 py-3 text-white font-bold mx-3 mt-2 rounded" >Submit</button>

              <span className="text-center my-3 w-full " > Or </span>

              <button className="w-full border py-3 text-gray-600 mx-3 mt-2 rounded flex justify-center shadow-md" >
                <img src={Google} alt="" />
                 <p className="ml-2">Sign Up with Google</p>
              </button>

              <p className="mt-3 w-full text-center" >If you New user? <Link to='/signup' className="text-cyan-500 font-bold" >Register</Link></p>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
