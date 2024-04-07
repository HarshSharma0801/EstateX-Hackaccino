import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import DisplayCard from "./DisplayCard";

const MainPage = ({account,state}) => {
 
   
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar account={account}/>
        <DisplayCard state={state} />
      </div>
    </>
  );
};

export default MainPage;