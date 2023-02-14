
import * as React from "react";

import Sidenav from "./Navigation/Sidenav/Sidenav";
import Router from "./Navigation/Router/Router";
import { useEffect, useState } from "react";
import { useWindowSize } from "../tools/WindowDimensions";

const themeOptions = [
    { name: "day", icon: "sun" },
    { name: "night", icon: "moon" },
    // { name: "experimental", icon: "flask" },
];

const Layout = () => {

    const [ initialWidth, initialHeight ] = useWindowSize();
    const [ pageSize, setPageSize ] = useState( { width: initialWidth, height: initialHeight } );
    const [ theme, setTheme ] = useState( themeOptions[ 0 ] );

    const changeTheme = () => {
        const themeInd = themeOptions.findIndex( x => x.name === theme.name ) ?? 0;
        const newTheme = themeOptions[ themeInd + 1 ] ?? themeOptions[ 0 ];
        setTheme( newTheme );
    };

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
                <Sidenav changeTheme={changeTheme} theme={theme}/>
                <div className={"page-container-right"}>
                    <Router/>
                </div>
            </div>
        </div>
    );
};

export default Layout;
