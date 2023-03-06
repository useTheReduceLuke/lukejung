
import * as React from "react";

import Sidenav from "./components/Navigation/Sidenav/Sidenav";
import Router from "./components/Navigation/Router/Router";
import { useStateStore } from "./shared/services/state.store";
import SiteHeader from "./components/Navigation/Sidenav/SiteHeader/SiteHeader";

const Layout = () => {

    // @ts-ignore
    const theme = useStateStore((state) => state.theme);

    return (
        <div className={"theme theme--" + theme.name}>
            <div className={"page"}>
                <div className={"page-container"}>
                    <Sidenav/>
                    <SiteHeader headerClass={"mobile-header"}/>
                    <Router/>
                </div>
            </div>
            <div className={"image-container"}>
                <div className={"image-fullsize"}/>
            </div>
        </div>
    );
};

export default Layout;
