
import * as React from "react";
import "./About.scss";
import aboutImages from "../../images/about/aboutImages";
import ParallaxImages, { ParallaxOptions } from "../../components/ParallaxImages/ParallaxImages";

const parallaxArray: ParallaxOptions[] = [
    {
        image:              aboutImages.lukeCoffee,
        text:               "The fellow having the tasty latte in Madrid, Spain is me, Luke!",
        speed:              -10,
    },
    {
        image:              aboutImages.dany,
        text:               "The one responsible for the most smiles per hour by Luke is this devious debutante, Dany!",
        speed:              -50,
    },
    {
        image:              aboutImages.nami,
        text:               'This is Nami right when we got her! Look at her (forgive my pun) "noming" away! Oh, and her and her sibling Nico are inseparable!',
        speed:              -15,
    },
    {
        image:              aboutImages.nico,
        text:               "This is Nico Robin also when we got her! She has zero filter, and believes everything belongs to her. Oh, and her and her sibling Nami are inseparable! (had to reiterate!)",
        speed:              -15,
    },
    {
        image:              aboutImages.tito,
        text:               "These piercing eyes belong to our big boy Tito, who loves nothing more than sleeping, and recently spending time outside staring through a hole in a fence. Hey, don't ask us.",
        speed:              -30,
    },
    {
        image:              aboutImages.tony,
        text:               "Tony is our old man, who despite his awkward composure in the photo is our most regal and, honestly, human-like cat. It's legitimately weird, he terrifies us BUT WE LOVE HIM YES WE DO TONY.",
        speed:              -30,
    },
    {
        image:              aboutImages.zuko,
        text:               "And the furthest down the alphabet: Zuko! He's not quite as fiery as his namesake, but he certainly is a sweetheart!",
        speed:              -50,
    },
];

const About = () => (
    <div className={"about-container"}>
        <ParallaxImages parallaxArray={parallaxArray}/>
    </div>
);

export default About;
