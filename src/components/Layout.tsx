
import * as React from "react";

import Sidenav from "./Navigation/Sidenav/Sidenav";
import Router from "./Navigation/Router/Router";
import { useEffect, useState } from "react";
import { useWindowSize } from "../tools/WindowDimensions";

const themeOptions = [
    { name: "day", icon: "sun" },
    { name: "night", icon: "moon" },
    { name: "experimental", icon: "flask" },
];

const Layout = () => {

    const [ theme, setTheme ] = useState( themeOptions[ 0 ] );
    const [ initialWidth, initialHeight ] = useWindowSize();
    const [ pageSize, setPageSize ] = useState( { width: initialWidth, height: initialHeight } );

    const changeTheme = () => {
        const themeInd = themeOptions.findIndex( x => x.name.localeCompare( theme.name ) ) ?? 0;
        const newThemeInd = themeInd >= themeOptions.length ? 0 : themeInd + 1;
        setTheme( themeOptions[ newThemeInd ] );
    };

    const themeIcon = theme.icon;

    useEffect( () => {

        const autoResize = () => {
            const [ width, height ] = useWindowSize();
            setPageSize( { width, height } );
            console.log( pageSize );
        };

        window.addEventListener( 'resize', autoResize );
    }, [] );

    return (
        <div className={"theme theme--" + theme.name}>
            <div className={"page-container"}>
                <Sidenav/>
                <div className={"page-container-right"}>
                    <Router/>
                </div>
                <button className={"dark-button"} onClick={changeTheme}>
                    <i className={`fa-solid fa-${ themeIcon }`}></i>
                </button>
            </div>
        </div>
    );
};

export default Layout;
