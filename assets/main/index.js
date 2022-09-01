
 const accessKey = 'FFe9OwqmwBF2zbCZcibSgOqniyGYjNzymP_EOlEbsI4';

 const randomUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`;

 const gallery = document.querySelector('.gallery')
 
 let  currentImage = 0;
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

         img.addEventListener('click', () => {
             currentImage = index;
             showPopup(item);
         })


     })
 }

 function showPopup(item){
    let popup = document.querySelector('.image-popup');
    const downloadBtn = document.querySelector('.download-btn');
    const closeBtn = document.querySelector('.close-btn');
    const image = document.querySelector('.large-img');
    
     popup.classList.remove('hide');
     downloadBtn.href = item.links.html;
     image.src =item.urls.regular;

     closeBtn.addEventListener('click', () => {
        popup.classList.add('hide')
     })
 }

 getAllImages();

