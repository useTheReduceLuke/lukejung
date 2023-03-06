
import * as React from "react";
import "./Portfolio.scss";
import portfolioImages from "../../images/portfolio/portfolioImages";
// @ts-ignore
import github from "../../images/portfolio/github.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const openLink = () => {
    window.open(
        "https://github.com/useTheReduceLuke/lukejung", "_blank");
};

const Header = () => (
    <div className={"header portfolio-item"}>
        <div>Check out my Github!</div>
        <div className={"github"} onClick={() => openLink()}>
            <div className={"github-image"}>
                <LazyLoadImage src={github}/>
            </div>
        </div>
        <p>I&lsquo;ve also included samples of my Figma design work below!</p>
    </div>
);

const Portfolio = () => {
    return (
        <div className={"portfolio-container"}>
            <Header/>
            {
                Object.values(portfolioImages)
                    .map((image: any, index: number) => {
                        return (
                            <div key={ `portfolio-${ index }` } className={"portfolio-item"}>
                                <LazyLoadImage src={ image }/>
                            </div>
                        );
                    })
            }
        </div>
    );
};

export default Portfolio;
