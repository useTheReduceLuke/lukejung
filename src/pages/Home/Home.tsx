

import './Home.scss';
import * as React from "react";

function Home() {

    return (
        <div className="content">
            <h1>Welcome!</h1>
            <div>I&apos;m Luke!</div>
            <div>Well, Luke&apos;s website. But I can get you to some info <b className={"link"}>about</b> him</div>
            <div>Or maybe you’re curious about his <b>portfolio</b></div>
            <p>(psst. You can also <b>contact</b> him, but don&apos;t tell anyone else!</p>
        </div>
    );
}

export default Home;
