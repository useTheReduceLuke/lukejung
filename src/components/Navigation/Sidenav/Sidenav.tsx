import "./Sidenav.scss";
import * as React from "react";
import { useEffect, useState } from "react";
import SiteHeader from "../SiteHeader/SiteHeader";
import NavItems from "./NavItems/NavItems";
import { NavItemClass } from "./NavItems/NavItem";
import { useLocation } from "react-router-dom";
import { useStateStore } from "../../../shared/services/state.store";

const navItems: NavItemClass[] = [
    {
        link:  "/",
        title: "Home",
        icon:  "fa-solid fa-person-shelter",
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
        link:  "/experimental",
        title: "Experimental",
        icon:  "fa-solid fa-person-through-window",
    },
];

const ThemeButton = () => {

    const advanceTheme =
        useStateStore((state) => state.advanceTheme);

    const changeTheme = (event: any) => {
        advanceTheme();
        event.stopPropagation();
    };
    const themeState = useStateStore(state => state.theme);

    return (
        <div className={`theme-button`} onClick={changeTheme}>
            <i className={`fa-solid fa-${ themeState.icon }`}/>
        </div>
    );

};

const ActionButtons = ({ sidenavState }: {sidenavState: boolean}) => {
    return (

        <div className={`action-buttons ${ sidenavState ? "expanded" : "collapsed" }`}>
            <ThemeButton/>
        </div>
    );
};

const Sidenav = () => {

    const location = useLocation();
    const [ activePage, setActivePage ] = useState(0);

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
            <div className={"nav-items"}>

                <SiteHeader headerClass={"desktop-header"}/>
                <NavItems navItems={Object.values(navItems)} activePage={activePage} />

                <ActionButtons sidenavState={sidenavState}></ActionButtons>
            </div>

            <div className={`nav-toggle`} onClick={toggleSidenav}>
                <i className={`fa-solid fa-${ sidenavState ? "down-left-and-up-right-to-center" : "bars" }`}></i>
            </div>
        </div>
    );
};

export default Sidenav;
