
import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import Calendar from "../../pages/Calendar/Calendar";
import Board from "../../pages/Board/Board";

import "./MainDash.css";
import Sidebar from "../Sidebar";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
      
    
     
    </div>
  );
};

export default MainDash;
