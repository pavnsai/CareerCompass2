import {Amplify } from 'aws-amplify';
import awsConfig from "../../aws-exports";
import { Authenticator } from '@aws-amplify/ui-react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import LandingPage from "../LandingPage/LandingPage";
import Login from "../Login/Login";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableContainer from "../TableContainer/TableContainer";
import PrivateRoute from "../Utils/PrivateRoute";
import Navbar from "../Navbar/Navbar";

Amplify.configure(awsConfig)

function InnerRoutes() {
    const location = useLocation();
    return (
        <>
                {location.pathname !== "/"&& <Navbar />}
                <Routes>
                    {/*<Route path='/jobs' element={<TableContainer />} />*/}
                    <Route path='/jobs' element={<PrivateRoute><TableContainer /></PrivateRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<LandingPage />} />
                </Routes>
        </>
    );
}

export default InnerRoutes;
