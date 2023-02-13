
import * as React from "react";
import './About.scss';

const textList = [ "Software Engineer", "Gamer", "Nerd", "Anime Enthusiast", "About Chef", "Dog Owner", "Cat Worshipper" ];

function About() {

    return (
        <div id={'list'} className="list">
            { textList.map( ( text, index ) => ( <div key={`about-item-${ index }`} className="item">{text}</div> ) )}
        </div>
    );
}

export default About;
