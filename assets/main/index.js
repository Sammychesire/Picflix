
 const accessKey = 'FFe9OwqmwBF2zbCZcibSgOqniyGYjNzymP_EOlEbsI4';

 const randomUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`;

 const gallery = document.querySelector('.gallery')

 let allImages;  //store all images

 function getAllImages(){
     (fetch(randomUrl))
     .then((res) => res.json())
     .then((data) => {
        console.log(data)
         allImages = data;
         createImages(allImages)
     });
    
 }

 function createImages(data){
     data.forEach((item,index) => {
         let img = document.createElement('img')
        img.src = item.urls.regular
        img.className = 'gallery-img'
         gallery.appendChild(img);
     })
 }

 getAllImages();

