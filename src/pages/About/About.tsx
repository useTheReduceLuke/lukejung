
import * as React from "react";
import "./About.scss";
import aboutImages from "../../images/about/aboutImages";
import ParallaxImages from "../../components/ParallaxImages/ParallaxImages";

const textArray = [
    "The fellow having the tasty latte in Madrid, Spain is me, Luke!",
    "The one responsible for the most smiles per hour by Luke is this devious debutante, Dany!",
    'This is Nami right when we got her! Look at her (forgive my pun) "noming" away! Oh, and her and her sibling Nico are inseparable!',
    "This is Nico Robin right when we got her! She has zero filter, and believes everything belongs to her. Oh, and her and her sibling Nami are inseparable! (had to reiterate!)",
    "These piercing eyes belong to our big boy Tito, who loves nothing more than sleeping, and recently spending time outside staring through a hole in a fence. Hey, don't ask us.",
    "Tony is our old man, who despite his awkward composure in the photo is our most regal and, honestly, human-like cat. It's legitimately weird, he terrifies us BUT WE LOVE HIM YES WE DO TONY.",
    "And the furthest down the alphabet: Zuko! He's not quite as fiery as his namesake, but he certainly is a sweetheart!",
];

interface ParallaxOptions {
    image: any,
    speed?: number,
    opacity?: [number, number],
    scale?: [number, number],
}

const parallaxArray: ParallaxOptions[] = [
    {
        image:              aboutImages.lukeCoffee,
        speed:              -10,
    },
    {
        image:              aboutImages.dany,
        speed:              -50,
    },
    {
        image:              aboutImages.nami,
        speed:              -15,
    },
    {
        image:              aboutImages.nico,
        speed:              -15,
    },
    {
        image:              aboutImages.tito,
        speed:              -30,
    },
    {
        image:              aboutImages.tony,
        speed:              -30,
    },
    {
        image:              aboutImages.zuko,
        speed:              -50,
    },
];

const About = () => (
    <ParallaxImages parallaxArray={parallaxArray} textArray={textArray}/>
);

export default About;
