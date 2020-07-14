const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// console.log(images);

const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('gallery__list');

const imageMarkup = images.map(image => {
  return `<li class = "gallery__item"><img src="${image.url}" alt="${image.alt}" class = 'gallery__img ' ></li>`;
});

galleryRef.insertAdjacentHTML('afterbegin', imageMarkup.join(''));

// const creatImgGallery = image => {
//   const imageItemRef = document.createElement('li');
//   imageItemRef.classList.add('gallery__item');
//   const imgRef = document.createElement('img');
//   imgRef.classList.add('gallery__img');
//   imgRef.setAttribute('src', image.url);
//   imgRef.setAttribute('alt', image.alt);
//   imageItemRef.appendChild(imgRef);
//   return imageItemRef;
// };

// const imgGalleryList = images.map(image => creatImgGallery(image));
// galleryRef.append(...imgGalleryList);
