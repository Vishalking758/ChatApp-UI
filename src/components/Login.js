import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState("");

  return (
    <>
      <div className=" h-[92vh] flex justify-center items-center bg-slate-800">
       
        <form>
          <div className="w-[300px] font-mono border-solid border-2 rounded-md flex flex-col p-5 border-sky-500">
          <p className="text-2xl text-center text-sky-500 font-mono p-2">Login</p>
            <div className="">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="off"
                required
                className="w-full rounded-t-lg my-1 py-1.5 px-1.5 text-sky-500 ring-1 bg-slate-700 ring-sky-600 placeholder:text-sky-500  focus:outline-sky-600"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <input
                placeholder="Password"
                id="password"
                name="password"
                autoComplete="off"
                onChange={(type) => type.target.value}
                className="w-full  my-1 py-1.5 px-1.5 text-sky-500 ring-1 bg-slate-700 ring-sky-600 placeholder:text-sky-500  focus:outline-sky-600"
                type={showPassword ? "text" : "password"}
              />
              <label
              htmlFor="password"
                className="absolute inset-y-0 right-2 h-full flex ml-4 items-center"
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {showPassword ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-sky-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-sky-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>

                  </>
                )}
              </label>
            </div>
            <div className="">
              <button className="w-full ring-1 mt-1 ring-sky-700 bg-sky-700 rounded-b-lg relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10  text-white p-2 inset-y-0 left-4 absolute">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

                <p className=" p-2 text-white font-mono">Sign in</p>
              </button>
            </div>
            <p className="mt-7 text-center text-sm text-sky-600">
          You have an account?
          <Link
          to="../Register"
          className="font-medium text-sky-400 ml-1 hover:text-sky-500"
        >
        Login
        </Link>
        </p>
          </div>
        </form>
      </div>
    </>
  );
}
