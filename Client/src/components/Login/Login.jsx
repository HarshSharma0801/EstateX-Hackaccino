import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import validate from "../../common/validation";
import hide from "../../assets/hide.png";
import show from "../../assets/show.png";
import { FaSyncAlt, FaEnvelope, FaKey, FaShieldVirus } from "react-icons/fa";
import logo from '../../assets/icon.svg'

const Login_ = (props) => {
    
  const clicked =()=>{
   console.log(props.account);
   props.clicked();

  }



  return (
    <div className="flex w-full flex-wrap">
      {/* <!-- Login Section --> */}
      <div className="w-full absolute">
      <div className=" bg-main-bg bg-cover bg-no-repeat bg-zinc-900 h-screen flex w-full text-white flex-col ">
        <div className="flex mt-20 justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
          <img src={logo} alt="" className="h-[240px] mx-auto pr-12" />
        </div>

        <div className="my-auto flex flex-col justify-center px-8 md:justify-start md:px-24 md:pt-0 lg:px-32 w-full items-center text-center">
          <p className="text-3xl">Finding Props made</p>
          <p className="text-sm text-gray-300 mt-2">
            Easy &nbsp; &nbsp; • &nbsp; &nbsp; Transparent &nbsp; &nbsp; •
            &nbsp; &nbsp; Verified{" "}
          </p>
          {/* <button onClick={'handleButtonClick'}>Login</button> */}
          {/* <form onSubmit={clicked}>
            <input
              type="submit"
              value="Log In"
              className="bg-black p-2 mt-5 text-lg font-bold text-white cursor-pointer hover:bg-gray-700"
            />
          </form> */}

          <button onClick={clicked} className="bg-black p-2 mt-5 text-lg font-bold text-white cursor-pointer hover:bg-gray-700 h-14 w-5/12">Connect to Wallet</button>
          {/* Render the ChildComponent and pass the data as a prop */}
          {/*<ChildComponent data={'dataToSend'} /> */}
        </div>
      </div>
      </div>
      <div>
        {/* 3d anims */}
   {/* <h1 className="bg-red-500 relative left-10">hi</h1> */}
     
      </div>

      {/* <!-- Image Section --> */}
      {/* <div className="w-1/2 shadow-2xl">
        <img
          className="hidden h-[100vh] w-full bg-center object-cover md:block"
          src="https://i.postimg.cc/c1MkZ67B/alexander-andrews-A3-DPhh-AL6-Zg-unsplash.jpg"
        />
      </div> */}
    </div>
  );
};

export default Login_;
