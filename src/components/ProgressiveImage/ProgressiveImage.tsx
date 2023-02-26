
import * as React from "react";
import { useState, useEffect } from "react";
import "./ProgressiveImage.scss";

const ProgressiveImage = (props: any) => {

    const
        { placeholderSrc, src, className }:
            { placeholderSrc: string, src: string, className: string } = props;
    const [ imgSrc, setImgSrc ] = useState(placeholderSrc || src);

    const customClass =
        placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src);
        };
    }, [ src ]);

    return (
        <div
            style={{ backgroundImage: `url( ${ imgSrc } )` }}
            className={`${ className } ${ customClass }`}
        >
            {props.children}
        </div>
    );
};
export default ProgressiveImage;
