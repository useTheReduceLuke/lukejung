
import './Experimental.scss';
import * as React from "react";
import FileEditor from "../../components/FileEditor/FileEditor";
// @ts-ignore
import ContactRaw from "../Contact/Contact?raw";


function Experimental() {

    return (
        <div className="experimental-content">
            <h1>Experimental designs and work below</h1>
            <div>(journey at your own peril!)</div>
            <FileEditor component={ ContactRaw }></FileEditor>
        </div>
    );
}

export default Experimental;
