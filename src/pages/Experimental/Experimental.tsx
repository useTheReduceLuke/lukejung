
import './Experimental.scss';
import * as React from "react";
import FileEditor from "../../components/FileEditor/FileEditor";
// @ts-ignore
import ContactRaw from "../Contact/Contact?raw";
import Game from "../../components/Game/Game";


function Experimental() {

    return (
        <div className="experimental-content">
            <h1>Experimental designs and work below</h1>
            <div>(journey at your own peril!)</div>
            <div>What&apos;s this? Maybe a game in the future, but for right now it&apos;s basically snow.</div>
            <Game/>
        </div>
    );
}

export default Experimental;
