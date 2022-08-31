const accessKey = ('FFe9OwqmwBF2zbCZcibSgOqniyGYjNzymP_EOlEbsI4')

const randomUrl = ('https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30')

const gallery = document.querySelector('.gallery')

let allImages;  //store all images