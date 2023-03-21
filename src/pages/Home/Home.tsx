
import { Link } from "react-router-dom";
import './Home.scss';
import * as React from "react";
import { Parallax } from "react-scroll-parallax";

function Home() {

    return (
        <div className="home-content">
            <div className={"home-item"}>
                <Parallax className={"home-header"} opacity={[ 2, 0 ]}>
                    <h1 className={"home-header-item"}>Imagined.</h1>
                    <h1 className={"home-header-item"}>Designed.</h1>
                    <h1 className={"home-header-item"}>Built.</h1>
                </Parallax>
            </div>
            <Parallax>
                <div className={"home-item"}/>
            </Parallax>
            <div className={"home-item"}>
                <p>Welcome to Luke Jungmann&apos;s website,
                    a place of curated code aiming to demonstrate Luke&apos;s experience and design principles.</p>
            </div>
            <div className={"home-item"}>
                <p>Learn <Link to={"/about"} className={"link"}>about</Link> him and his family</p>
            </div>
            <div className={"home-item"}>
                <p>Check out his <Link to={"/portfolio"} className={"link"}>portfolio</Link></p>
            </div>
            <div className={"home-item"}>
                <p>Or, see what kind of <Link to={"/experimental"} className={"link"}>experimental</Link> projects he&apos;s working on</p>
            </div>
            <div className={"scroll-indicator"}>SCROLL</div>
        </div>
    );
}

export default Home;
