import "./App.scss";
import React, { useEffect, useState } from "react";
import Layout from "Layout";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [ pathname ]);

    return null;
};

const App = () => {

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://kit.fontawesome.com/0cb5558475.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const [ history, setHistory ] = useState([]);

    useEffect(() => {
        if (history.length > 100) history.pop();
        const hist = [ ...history ];
        hist.push(location.pathname);
        setHistory(hist);
    }, [ location ]);


    return (
        <BrowserRouter>
            <ParallaxProvider>
                <ScrollToTop/>
                <Layout/>
            </ParallaxProvider>
        </BrowserRouter>
    );
};

export default App;
