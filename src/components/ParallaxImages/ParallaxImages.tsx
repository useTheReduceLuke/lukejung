
import * as React from "react";
import "./ParallaxImages.scss";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useRef, useState } from "react";
import { debounce, isString } from "lodash";

export interface ParallaxOptions {
    image?: any,
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
    { parallax, dimensions, textItem }:
        {parallax: ParallaxOptions, dimensions: any, textItem: string},
) => {

    if (dimensions?.width && dimensions.height) {
        return (<div className={ "parallax-item" }>
            <ParallaxBanner
                layers={[{ ...parallax, speed: getBannerSpeed(dimensions.width, parallax.speed) }]}
                style={ getBannerStyle(dimensions.width) }>
                <ImageInfo text={textItem}/>
            </ParallaxBanner>
        </div>);
    }
    return null;
};

const ParallaxImages = (
    { parallaxArray, textArray }:
        { parallaxArray: ParallaxOptions[], textArray: string[], children?: any} = { parallaxArray: [], textArray: [] },
) => {

    const ref = useRef(null);
    const newDimensions = useContainerDimensions(ref);

    const [ dimensions, setDimensions ] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimensions(newDimensions);
    });

    return (
        <div className={"parallax-container"} ref={ref}>
            <ParallaxProvider>
                {
                    parallaxArray.map((parallax, index) => {
                        return (
                            <ParallaxItem
                                key={`parallax-${ index }`}
                                parallax={parallax}
                                dimensions={dimensions}
                                textItem={textArray[ index ]}/>
                        );
                    })
                }
            </ParallaxProvider>
        </div>
    );
};

export default ParallaxImages;
