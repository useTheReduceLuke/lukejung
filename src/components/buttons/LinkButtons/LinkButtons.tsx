import * as React from "react";
import LinkButton from "./LinkButton";

const openLink = (link: string) => () => {
    window.open(link, "_blank");
};

export const GitHubButton = ({ className }: {className?: string}) => {
    const link = "https://github.com/useTheReduceLuke/lukejung";
    return (
        <LinkButton clickFunc={ openLink(link) } className={ className }>
            <i className={`fa-brands fa-square-github`}/>
        </LinkButton>
    );
};

export const LinkedInButton = ({ className }: {className?: string}) => {
    const link = "https://www.linkedin.com/in/luke-jungmann/";
    return (
        <LinkButton clickFunc={ openLink(link) } className={ className }>
            <i className={`fa-brands fa-linkedin`}/>
        </LinkButton>
    );
};
