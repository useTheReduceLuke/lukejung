import "./Sidenav.scss";
import * as React from "react";
import { useEffect, useState } from "react";
// import { useSwipeable } from "react-swipeable";
// import $ from "jquery";
import SiteHeader from "./SiteHeader/SiteHeader";
import NavItems from "./NavItems/NavItems";
import { BrowserView } from 'react-device-detect';
// const defaultMenuPosition = {
//     right:  0,
//     bottom: 0,
// };

// let menuPosition = defaultMenuPosition;
import CottageIcon from '@mui/icons-material/Cottage';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CssIcon from '@mui/icons-material/Css';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { NavItemClass } from "./NavItems/NavItem";
import { useLocation } from "react-router-dom";

const navItems: NavItemClass[] = [
    {
        link:  "/",
        title: "Home",
        icon:  <CottageIcon/>,
    },
    {
        link:  "/about",
        title: "About",
        icon:  <EngineeringIcon/>,
    },
    {
        link:  "/skills",
        title: "Skills",
        icon:  <CssIcon/>,
    },
    {
        link:  "/portfolio",
        title: "Portfolio",
        icon:  <ContactPageOutlinedIcon/>,
    },
    {
        link:  "/contact",
        title: "Contact",
        icon:  <EmailOutlinedIcon/>,
    },
];

const Sidenav = ( { theme, changeTheme }: {theme: any, changeTheme: any} ) => {

    const location = useLocation();
    // useEffect( () => {
    //     const menuItems = $( "#nav" );
    //
    //     open
    //         ? ( menuPosition = defaultMenuPosition )
    //         : ( menuPosition = {
    //             right:  -menuItems.width(),
    //             bottom: -menuItems.height(),
    //         } );
    // }, [ open ] );

    // const handlers = useSwipeable( {
    //     onSwiped: eventData => {
    //         console.log( eventData.dir === "Down" || eventData.dir === "Right" );
    //         console.log( menuPosition );
    //         setOpen( eventData.dir === "Down" || eventData.dir === "Right" );
    //     },
    // } );
    const [ activePage, setActivePage ] = useState( 0 );

    useEffect( () => {
        const active = Object.values( navItems ).findIndex( x => x.link.toLocaleLowerCase()
            .includes( location.pathname.toLocaleLowerCase() ) );
        setActivePage( active );
    }, [ location ] );

    const themeIcon = theme.icon;

    return (
        <div className={"sidenav"}>
            <div>
                <BrowserView>
                    <SiteHeader/>
                </BrowserView>
                <NavItems navItems={Object.values( navItems )} activePage={activePage} />
            </div>
            <button className={"dark-button"} onClick={changeTheme}>
                <i className={`fa-solid fa-${ themeIcon }`}></i>
            </button>
        </div>
    // <div className={"sidenav"} {...handlers} style={menuPosition}>
    // 	<div className={"icon-container"} onClick={() => setOpen(!open)}>
    // 		<Menu sx={{ fontSize: 32, color: "#513e3e" }}/>
    // 	</div>
    // 	<nav id={"nav"}>
    // 		<NavItems routes={routes}/>
    // 	</nav>
    // </div>
    );
};

export default Sidenav;
