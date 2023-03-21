
import * as React from "react";
import "./Portfolio.scss";
import portfolioImages from "../../images/portfolio/portfolioImages";
import { GitHubButton } from "../../components/buttons/LinkButtons/LinkButtons";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => (
    <div className={"header portfolio-item"}>
        <div>Check out my Github!</div>
        <GitHubButton className={"large"}/>
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
