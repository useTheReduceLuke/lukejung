import "./SiteHeader.scss";
import * as React from "react";
import { Link } from "react-router-dom";

const SiteHeader = ({ headerClass }: {headerClass: string}) => {

    return (
        <Link to={'/'} className={`${ headerClass } site-header`}>
            <div className={"website-title"}>
                <h3 className={"first-name"}>Luke</h3>
                <h3 className={"last-name"}>Jungmann</h3>
            </div>
        </Link>
    );
};

export default SiteHeader;
