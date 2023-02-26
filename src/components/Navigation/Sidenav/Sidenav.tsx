import "./Sidenav.scss";
import * as React from "react";
import { useEffect, useState } from "react";
import SiteHeader from "./SiteHeader/SiteHeader";
import NavItems from "./NavItems/NavItems";
import { NavItemClass } from "./NavItems/NavItem";
import { useLocation } from "react-router-dom";
import { useStateStore } from "../../../shared/services/state.store";

const navItems: NavItemClass[] = [
    {
        link:  "/",
        title: "Home",
        icon:  "fa-solid fa-house-chimney",
    },
    {
        link:  "/about",
        title: "About",
        icon:  "fa-regular fa-address-card",
    },
    {
        link:  "/portfolio",
        title: "Portfolio",
        icon:  "fa-regular fa-address-book",
    },
    {
        link:  "/contact",
        title: "Contact",
        icon:  "fa-regular fa-envelope",
    },
];

const Sidenav = () => {

    const location = useLocation();
    const [ activePage, setActivePage ] = useState(0);

    // @ts-ignore
    const toggleSidenav =
        useStateStore((state) => state.toggleSidenav);

    const sidenavState = useStateStore(state => state.sidenavExpanded);

    useEffect(() => {
        const active = Object.values(navItems).findIndex(x => x.link.toLocaleLowerCase()
            .includes(location.pathname.toLocaleLowerCase()));
        setActivePage(active);
    }, [ location ]);

    return (
        <div className={`sidenav ${ sidenavState ? "expanded" : "collapsed" }`}>
            <div className={"nav-items"} onClick={toggleSidenav}>
                <SiteHeader headerClass={"desktop-header"}/>
                <NavItems navItems={Object.values(navItems)} activePage={activePage} />
            </div>
            <div className={"nav-actions"}>
                <span className={`nav-toggle`} onClick={toggleSidenav}>
                    <i className={`fa-solid fa-${ sidenavState ? "down-left-and-up-right-to-center" : "bars" }`}></i>
                </span>
            </div>
        </div>
    );
};

export default Sidenav;
