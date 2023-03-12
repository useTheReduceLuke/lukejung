
import * as React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

const FileEditor = () => {

    return (
        <LiveProvider code={'<div/>'}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
    );
};

export default FileEditor;
