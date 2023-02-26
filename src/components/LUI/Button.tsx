
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import * as React from "react";
import "./Button.scss";

// type ButtonSize = "small" | "large";

const makeButtonClass = ( inClass: string ) => "Lui-Button-" + inClass;

const Button = ( { children, type }: { children: any, type: string } ) => {

    const buttonClass = makeButtonClass( type );

    return <ButtonUnstyled className={buttonClass}>{ children }</ButtonUnstyled>;
};

export default Button;
