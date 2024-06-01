import React, { memo } from "react"

function HomePage () {
    return <>
        <h1>Welcome to Online FileSystem!</h1>
        
        <p>Please be mindful about the content uploaded, this is a fileSystem server run by Zirui Zhang.</p>
        <p>Only a test version now!</p>
        <p>Not responsible for the content uploaded!</p>
        <p>Click on a link to get started.</p>
    </>
}

export default memo(HomePage);
