import { Link } from "react-router-dom";
import * as React from "react";

export type NavItemClass = {
    title: string;
    icon: any;
    link: string;
}

const NavItem = ( { item, i, active }: { item: NavItemClass, i: number, active: boolean } ) => {

    return (
        <Link to={item.link} className={active ? 'active' : ''} key={`navItem-${ i }`}>
            <h5 className={"nav-item"}>
                <i className={`${ item.icon }`}></i>
                {item.title}
            </h5>
        </Link>
    );
};

export default NavItem;
