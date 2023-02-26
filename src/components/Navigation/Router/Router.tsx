
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home/Home";
import About from "../../../pages/About/About";
import Portfolio from "../../../pages/portfolio";
import Contact from "../../../pages/contact";
import NotFoundPage from "../../../pages/404";

const Router = () => {
    return <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>;
};

export default Router;
