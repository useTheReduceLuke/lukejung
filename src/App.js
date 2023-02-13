import "./App.scss";
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

const App = () => {

    const [ history, setHistory ] = useState( [] );

    useEffect( () => {
        if ( history.length > 100 ) history.pop();
        const hist = [ ...history ];
        hist.push( location.pathname );
        setHistory( hist );
    }, [ location ] );


    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    );
};

export default App;
