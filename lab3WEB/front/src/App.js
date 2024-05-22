import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Sign from "./components/Sign";
import Login from "./components/Login";
import Account from "./components/Account";
import LatestPosts from "./components/LatestPosts";
import CountryInfo from "./components/CountryInfo";

function App() {
    return (
        <div className="bg-body-tertiary d-flex flex-column min-vh-100">
            <BrowserRouter>
                <Routes>
                    <Route index element=<LatestPosts/>/>
                    <Route path="/about-us" element=<AboutUs />/>
                    <Route path="/country/:country" element={<CountryInfo />} />
                    <Route path="/germany" element=<AboutUs />/>
                    <Route path="/australia" element=<AboutUs />/>
                    <Route path="/login" element=<Login/>/>
                    <Route path="/sign" element=<Sign/>/>
                    <Route path="/account" element=<Accounte/> />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
