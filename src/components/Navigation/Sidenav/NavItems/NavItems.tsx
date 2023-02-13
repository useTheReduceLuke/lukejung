import * as React from "react";
import "./NavItems.scss";
import NavItem, { NavItemClass } from "./NavItem";

// let currentPage = "/";
function NavItems( { navItems, activePage }: {navItems: Array<NavItemClass>, activePage: number} ) {

    return (
        <div className={"nav-links"}>
            {Object.values( navItems ).map( ( item, i ) => {
                return <NavItem item={item} i={i} active={activePage === i} key={"nav-item-" + i} />;
            } )}
        </div>
    );
}

export default NavItems;
