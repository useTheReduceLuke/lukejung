import * as React from 'react';
import "./Contact.scss";
import Button from "components/LUI/Button";
import Input from "components/LUI/Input";

const getAllFunctionStrings = (component: any) => {
    console.log(component);
    const functionNames = Object.getOwnPropertyNames(component.prototype)
        .filter(name => typeof (component.prototype as any)[ name ] === 'function');

    console.log(functionNames);
    return functionNames.map(name => (component.prototype as any)[ name ].toString());
};

const Contact = () => {

    const functionStrings = getAllFunctionStrings(Contact);
    console.log(functionStrings);

    return (
        <div className={ "list" }>
            <h1>Contact</h1>
            <Input></Input>
            <Button type={ "back" }><span
                className={ "corner-frames-content" }> Test Button </span></Button>
            <div className={ "right-corner-frame" }>Another Button</div>
        </div>
    );
};

export default Contact;
