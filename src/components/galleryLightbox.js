import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../photos";

//Another gallery to try:
//https://simple-react-lightbox.dev/documentation/hooks

//this gallery:
//https://www.npmjs.com/package/react-photo-gallery

//Check it out some react libraries for photos: 
//https://openbase.com/categories/js/best-react-gallery-libraries?orderBy=RECOMMENDED&
//Check out another headless cms: https://strapi.io/pricing selfhosted



//###############################     NOW
function GalleryLightBox() {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
    return (
      <div>
        <Gallery photos={photos} onClick={openLightbox} />
        {
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
              
            </Modal>
          ) : null}
        </ModalGateway>
               }
      </div>
    );
}

//render(<App />, document.getElementById("app"));

export default GalleryLightBox;


//###############################NOW ENDs






//************************************************************************ */
// it works as a gallery. But I need it to be Open picture onClick not by default
// try: https://jossmac.github.io/react-images/#/
/*
export default class GalleryLightBox extends React.Component {

  render() {
    return <Carousel views={photos} />;
  }
  
}
*/

//************************************************************************* */
// produces error oclick. Why?
/*
export default function GalleryLightBox() {
  //function App() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
    return (
      <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
  //render(<App />, document.getElementById("app"));
*/





//******************************************************** */
/* worked but not lighttbox. At least displays pictures
function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
}


export default class PhotoGalleryLightBox extends React.Component {
    render() {
  return (
    <div>
      <Gallery photos={photos} onClick={App.openLightbox} />
      <ModalGateway>
        {App.viewerIsOpen ? (
          <Modal onClose={App.closeLightbox}>
            <Carousel
              currentIndex={App.currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
    }
}
//render(<App />, document.getElementById("root"));

*/



