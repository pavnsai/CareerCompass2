import {Amplify } from 'aws-amplify';
import awsConfig from "./aws-exports";
import { Authenticator } from '@aws-amplify/ui-react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableContainer from "./components/TableContainer/TableContainer";
import PrivateRoute from "./components/Utils/PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import InnerRoutes from "./components/Routes/InnerRoutes";

Amplify.configure(awsConfig)

function App() {

  return (
          <Authenticator.Provider>
          <BrowserRouter>
              <InnerRoutes/>
          </BrowserRouter>
          </Authenticator.Provider>
);
}

export default App;
