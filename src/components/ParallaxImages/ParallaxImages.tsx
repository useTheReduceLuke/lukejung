
import * as React from "react";
import "./ParallaxImages.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import { useEffect, useRef, useState } from "react";
import { debounce, isString } from "lodash";

export interface ParallaxOptions {
    image: any,
    text?: string,
    speed?: number,
    opacity?: [number, number],
    scale?: [number, number],
    children?: any
}

const ImageInfo = ({ text }: { text: string }) => {
    if (text && isString(text)) return (
        <div className={"parallax-text"}>
            <span className={"text-liner"}> {text} </span>
        </div>
    );

    return null;
};

export const useContainerDimensions = (myRef: any) => {
    const [ dimensions, setDimensions ] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const getDimensions = () => ({
            width:  myRef.current.offsetWidth,
            height: myRef.current.offsetHeight,
        });

        const handleResize = () => {
            setDimensions(getDimensions());
        };

        if (myRef.current) {
            setDimensions(getDimensions());
        }

        window.addEventListener("resize", debounce(handleResize, 200));

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [ myRef ]);

    return dimensions;
};

const isThinPhone = (size: number) => size < 500;

const getBannerStyle = (size: number) => isThinPhone(size) ?
    { aspectRatio: '1 / 1.5' } :
    { aspectRatio: '1.5 / 1' };

const getBannerSpeed = (size: number, speed = -20) => {
    return isThinPhone(size) ?
        -10 :
        speed;
};


const ParallaxItem = (
    { parallax, dimensions }:
        {parallax: ParallaxOptions, dimensions: any},
) => {

    if (dimensions?.width && dimensions.height) {
        return (<div className={ "parallax-item" }>
            <ParallaxBanner
                layers={[
                    { ...parallax, speed: getBannerSpeed(dimensions.width, parallax.speed) },
                    {
                        translateY: [ 30, -30 ],
                        children:   (
                            <ImageInfo text={parallax.text ?? ''}></ImageInfo>
                        ),
                    },
                ]}
                style={ getBannerStyle(dimensions.width) }>
            </ParallaxBanner>
        </div>);
    }
    return null;
};

const ParallaxImages = (
    { parallaxArray }:
        { parallaxArray: ParallaxOptions[], children?: any} = { parallaxArray: [] },
) => {

    const ref = useRef(null);
    const newDimensions = useContainerDimensions(ref);

    const [ dimensions, setDimensions ] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimensions(newDimensions);
    });

    return (
        <div className={"parallax-container"} ref={ref}>
            {
                parallaxArray.map((parallax, index) => {
                    return (
                        <ParallaxItem
                            key={`parallax-${ index }`}
                            parallax={parallax}
                            dimensions={dimensions}/>
                    );
                })
            }
        </div>
    );
};

export default ParallaxImages;
