import React from "react";
import {Navigation} from "../components/navigation/index"
import"./global.css"
import { BrowserRouter as Router } from "react-router-dom";
import {Header} from "../components/header/index"


export const App = () => {
  return (
    <>
   
   <Header/>
  
    <Router><Navigation/></Router>
  

    </>
  );
};