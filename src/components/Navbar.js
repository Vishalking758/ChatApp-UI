import React from "react";
import ProfileSection from "./ProfileSection";
import profile_image from "./Snapchat.jpg";

export default function Navbar() {
  return (
    <div className="w-screen h-[20%] rounded-2xl border lg:h-4/5 lg:w-3/12 bg-slate-900">
      <div className="lg:h-[10%] h-[35%] flex justify-between items-center px-2 ">
        {" "}
        <img
          alt="Profile"
          className="h-[90%] rounded-full"
          src={profile_image}
        ></img>
<p className="text-2xl">Hello</p>

<button className="border px-3 bg-sky-600 text-red-600 rounded-xl">logout</button>
      </div>




      <div className="lg:h-[6%] h-[25%] border flex items-center justify-center">
        <input className="h-4/5 p-1 w-full bg-slate-800" placeholder="Search" />
      </div>
      <div className="lg:h-[84%] h-[40%] overflow-x-scroll overflow-y-scroll">
        <ProfileSection />
      </div>
    </div>
  );
}
