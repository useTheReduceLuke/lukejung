
import * as React from "react";
import './About.scss';
import ProgressiveImage from "../../components/ProgressiveImage/ProgressiveImage";

import CoffeeBig from "../../images/lukecoffee.webp";
import CoffeePlaceholder from "../../images/lukecoffeelowres.webp";
import Zuko from "../../images/zuko.webp";
import ZukoPlaceholder from "../../images/zukolowres.webp";

function About() {

    return (
        <div className="about">
            <div className={"parallax-container"}>
                <ProgressiveImage placeholderSrc={CoffeePlaceholder} src={CoffeeBig} className={"parallax-container"}>
                    <div className={"parallax-content"}>
                        The fellow having the tasty latte in Madrid, Spain is me!
                    </div>
                </ProgressiveImage>
                <ProgressiveImage placeholderSrc={ZukoPlaceholder} src={Zuko} className={"parallax-container"}>
                    <div className={"parallax-content"}>
                        And this guy&apos;s name is Zuko!
                    </div>
                </ProgressiveImage>
            </div>
        </div>
    );
}
// { /* <ProgressiveImage */ }
// { /*     imageClass={"parallax-content"} */ }
// { /*     placeholderSrc={CoffeePlaceholder} */ }
// { /*     src={CoffeeBig} */ }
// { /*     alt={"An Image of Me Having Coffee"} */ }
// { /* /> */ }

export default About;
