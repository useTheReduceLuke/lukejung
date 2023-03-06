
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home/Home";
import About from "../../../pages/About/About";
import Portfolio from "../../../pages/Portfolio/Portfolio";
import Contact from "../../../pages/Contact/Contact";
import NotFoundPage from "../../../pages/404";

const Router = () => {
    return <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>;
};
// <Route path="contact" element={<Contact />} />

export default Router;
