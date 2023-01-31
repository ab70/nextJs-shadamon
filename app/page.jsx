"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

const signUpInitialState = {
  name: "",
  emailphone: "",
  password: "",
};

export default function Home() {
  const [signUp, setSignUp] = useState();

  //function
  const onInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    
  };
  const finalObj = (x)=>{
    console.log(x);
    let finalData ={}
    if(x==true){
      finalData = {
        name: signUp.name,
        email: signUp.emailphone,
        password: signUp.password
      }
      
    }
    else{
      finalData = {
        name: signUp.name,
        phone: signUp.emailphone,
        password: signUp.password
      }
    }
    console.log(finalData);

  }
  //submit form 
  const submitForm = ()=>{
    console.log(isNaN(signUp.emailphone));
    let checkValue = isNaN(signUp.emailphone)
    checkValue ? finalObj(checkValue) : finalObj(checkValue)
  }

  return (
    <>
      <div className="flex justify-center">
        <div>
          <form method="post">
            <div className="form-floating mb-3 xl:w-96">
              <input
                type="text"
                className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="name"
                onChange={(e) => onInputChange(e)}
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput" className="text-gray-700">
                Name
              </label>
            </div>
            <div className="form-floating mb-3 xl:w-96">
              <input
                type="text"
                className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="emailphone"
                onChange={(e) => onInputChange(e)}
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput" className="text-gray-700">
                Email or phone
              </label>
            </div>
            <div className="form-floating mb-3 xl:w-96">
              <input
                type="password"
                className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                name="password"
                onChange={(e) => onInputChange(e)}
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword" className="text-gray-700">
                Password
              </label>
            </div>
            <button type="button" onClick={submitForm} class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Success</button>
          </form>
        </div>
      </div>
    </>
  );
}
