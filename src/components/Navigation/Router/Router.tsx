
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home/Home";
import About from "../../../pages/About/About";
import Experimental from "../../../pages/Experimental/Experimental";
import Portfolio from "../../../pages/Portfolio/Portfolio";
import NotFoundPage from "../../../pages/404";
import "./Router.scss";

const Router = () => {
    return (
        <div className={"router"}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="experimental" element={<Experimental />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>);
};

export default Router;
