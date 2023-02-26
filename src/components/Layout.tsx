
import * as React from "react";

import Sidenav from "./Navigation/Sidenav/Sidenav";
import Router from "./Navigation/Router/Router";
import { useEffect, useState } from "react";
import { useWindowSize } from "../tools/WindowDimensions";
import { useStateStore } from "../shared/services/state.store";
import SiteHeader from "./Navigation/Sidenav/SiteHeader/SiteHeader";

const Layout = () => {

    const [ initialWidth, initialHeight ] = useWindowSize();
    const [ pageSize, setPageSize ] = useState({ width: initialWidth, height: initialHeight });

    // @ts-ignore
    const theme = useStateStore((state) => state.theme);

    useEffect(() => {

        const autoResize = () => {
            const [ width, height ] = useWindowSize();
            setPageSize({ width, height });
        };

        window.addEventListener('resize', autoResize);
    }, []);

    return (
        <div className={"theme theme--" + theme.name}>
            <div className={"page"}>
                <div className={"page-container"}>
                    <Sidenav/>
                    <SiteHeader headerClass={"mobile-header"}/>
                    <div className={"page-container-right"}>
                        <Router/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
