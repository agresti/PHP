
import React, { useState, useCallback, render } from 'react';
import ReactDOM from 'react-dom';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../photos";



export default class PhotoGallery extends React.Component {
  
    render() {
      return (
      //<Gallery photos={PHOTO_SET} />
      // Basic Row Layout:
      //<Gallery photos={photos} />
      //Basic Column Layout:
      <Gallery photos={photos} direction={"column"}/>

      //<Gallery photos={photos} onClick={openLightbox} />
      
      //Also available With Lightbox: https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/     
    );
    }
  } 
  
//--------------------------------------  



   
 

    
 