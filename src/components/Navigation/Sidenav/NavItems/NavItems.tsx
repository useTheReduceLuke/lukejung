import * as React from "react";
import "./NavItems.scss";
import NavItem, { NavItemClass } from "./NavItem";
import { useStateStore } from "../../../../shared/services/state.store";

// let currentPage = "/";
function NavItems({ navItems, activePage }: {navItems: Array<NavItemClass>, activePage: number}) {

    const toggleSidenav =
        useStateStore((state) => state.toggleSidenav);

    return (
        <div className={"nav-links"} onClick={toggleSidenav}>
            {Object.values(navItems).map((item, i) => {
                return <NavItem item={item} i={i} active={activePage === i} key={"nav-item-" + i} />;
            })}
        </div>
    );
}

export default NavItems;
