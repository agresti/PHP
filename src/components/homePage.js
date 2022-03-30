import React from 'react';
import Gallery from "react-photo-gallery";



export default class HomePage extends React.Component {

    render() {
        return (
            <div> 
            <h1>Hi</h1>

            <Gallery photos={illustrationTop} direction={"column"}/>
            </div>
        );
    }

};

export const illustrationTop = [
    
    {
      src: "http://localhost:3000/src/images/agrestudio_illustration_top.png",
      width: 3,
      height: 4   
    }
];