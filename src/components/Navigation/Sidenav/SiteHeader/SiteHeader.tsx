import "./SiteHeader.scss";
import * as React from "react";

const SiteHeader = ({ headerClass }: {headerClass: string}) => {

    return (
        <div className={`${ headerClass } site-header`}>
            <div className={"website-title"}>
                <h3 className={"first-name"}>Luke</h3>
                <h3 className={"last-name"}>Jungmann</h3>
            </div>
        </div>
    );
};

export default SiteHeader;
