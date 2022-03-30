import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

//import Gallery from "react-photo-gallery";
//import { photos } from "./photos";
import Navigation from "./components/nav";
import HomePage from "./components/homePage";
import PhotoGallery from './components/gallery';
import GalleryLightBox from "./components/galleryLightbox";

function App() {  
  return ( 
      
    <div className="App">
      <Navigation/>
      <HomePage/>
        <GalleryLightBox />
    </div>   
    
  );
}
export default App;


//*********************************************** */
// This is gallery without lightbox
/*
function App() {  
  return (   
    <div className="App">
        <PhotoGallery />
    </div>    
  );
}
export default App;
*/


//***************************************** */
/*
var request = new XMLHttpRequest()
request.open('GET', 'https://agrestudio.com/cockpit/api/collections/get/charlie?token=5e9887e93af6d38c2b72237aabbe76', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  data.entries.forEach(entry => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    const img = document.createElement('img')     
    //collections name
    var image = img.textContent
    image = 'https://agrestudio.com/' + entry.image.path
    img.src = image
    card.appendChild(img)
  })
}
*/

/*
const apiUrl = 'https://agrestudio.com/cockpit/api/collections/get/charlie?token=5e9887e93af6d38c2b72237aabbe76';
fetch(apiUrl)
  .then((response) => response.json())
  //.then((data) => console.log('This is your data', data))
  //.then((data) => <img src={data} alt="" />);

  .then((data) => data.entries.forEach(entry => {
    <img src = {entry.image.path} />
    })    
    )
*/




  

 
