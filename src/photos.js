

const apiUrl = 'https://agrestudio.com/cockpit/api/collections/get/charlie?token=5e9887e93af6d38c2b72237aabbe76';

// READ THIS: https://dmitripavlutin.com/javascript-fetch-async-await/ 
//https://www.storyblok.com/tp/react-dynamic-component-from-json

//const response = await fetch(apiUrl)

// It Works but dissapiar on page reload----------------
/*
fetch(apiUrl)
.then((response) => response.json())
.then((data) => data.entries.forEach(entry => {

  photos.push(
    {
      src: "http://www.agrestudio.com" + entry.image.path,
      width: 3,
      height: 4
    }
  ) 
  return console.log(photos);
    //console.log(photos);
  })) 
*/
  
  //--------------------------------------------------------------
//START NOW---------------------------------------
/*
fetch(apiUrl)
.then((response) => response.json())
.then((data) => data.entries.map(entry => {

  let imagePath = entry.image.path;
  
    //console.log(photos);
  
  photos.push (
    {
      src: "http://www.agrestudio.com" + imagePath,
      width: 3,
      height: 4
    }
  ) 

  return console.log(photos);
}))
*/
  //END NOW----------------------------------------

//Array (? is this array or object) to use :
  export const photos = [
    
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4   
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    
    {
      src: "http://www.agrestudio.com/cockpit/storage/uploads/2020/06/20/5eee8abb4e63bcharlie.jpg",
      width: 3,
      height: 4

    },
    {
      src: "http://www.agrestudio.com/cockpit/storage/uploads/2020/07/06/5f0328e75f29bcharlie.JPG",
      width: 4,
      height: 4
    }
  ];




/*
export const photos = [
    {
      src: "http://www.agrestudio.com/cockpit/storage/uploads/2020/06/20/5eee8abb4e63bcharlie.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://www.agrestudio.com/cockpit/storage/uploads/2020/07/06/5f0328e75f29bcharlie.JPG",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3
    }
  ];
  */