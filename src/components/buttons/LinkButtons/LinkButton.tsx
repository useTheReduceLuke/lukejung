
import * as React from "react";
import "./LinkButton.scss";

const LinkButton = ({ clickFunc, className, children }:
    { clickFunc: () => void, className?: string, children?: any}) => {

    return (
        <div className={ `link-button ${ className ?? '' }` } onClick={ clickFunc }>
            {children}
        </div>
    );
};

export default LinkButton;
