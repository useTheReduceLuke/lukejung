
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import * as React from "react";
import "./Button.scss";

// type ButtonSize = "small" | "large";

const makeButtonClass = ( inSpecs: Array<any> = [] ) => {
    return inSpecs.join( " " );
};

const Button = ( inSpec: any ) => {

    const specs = Object.values( inSpec );

    const buttonClass = makeButtonClass( specs );

    return <ButtonUnstyled className={buttonClass}>Test</ButtonUnstyled>;
};

export default Button;
