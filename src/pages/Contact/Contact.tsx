import * as React from 'react';
import "./Contact.scss";
import Button from "components/LUI/Button";
import Input from "components/LUI/Input";

const Contact = () => (
    <div className={"list"}>
        <h1>Contact</h1>
        <Input></Input>
        <Button type={"back"}><span className={"corner-frames-content"}> Test Button </span></Button>
        <div className={"right-corner-frame"}>Another Button</div>
    </div>
);

export default Contact;
