
import { Link } from "react-router-dom";
import './Home.scss';
import * as React from "react";

function Home() {

    return (
        <div className="content">
            <h1>Welcome!</h1>
            <div>I&apos;m Luke!</div>
            <div>Well, Luke&apos;s website. But I can get you to some info <Link to={"/about"} className={"link"}>about</Link> him</div>
            <div>Or maybe you’re curious about his <Link to={"/portfolio"} className={"link"}>portfolio</Link></div>
        </div>
    );
}
// <p>(psst. You can also <Link to={"/contact"} className={"link"}>contact</Link> him, but don&apos;t tell anyone else!</p>

export default Home;
