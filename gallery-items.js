const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
let currentIndex = null;

const parentUl = document.querySelector('.gallery.js-gallery')
function convert(object) {
  const createLI = object.map((elem,index) => `<li class="gallery__item">
  <a class="gallery__link" href = '${elem.original}'>
    <img class="gallery__image" data-index='${index}' src="${elem.preview}" data-source='${elem.original}' alt='${elem.description}'>
    </a></li>`).join('')
    parentUl.insertAdjacentHTML('afterbegin', createLI)
    
  }
  convert(images)
  
function prevent(e) {
    e.preventDefault();
    if (e.target.classList.contains('gallery__image')) {
      modal.classList.add('is-open')
      
    }
    const modalImage = document.querySelector('.lightbox__image')
  modalImage.src = e.target.dataset.source;
  currentIndex = +e.target.dataset.index;
  console.log(currentIndex)
  }

  const mainUl = document.querySelector('.js-gallery')
  mainUl.addEventListener('click', prevent)
  const modal = document.querySelector('.lightbox')
  modal.addEventListener('click', function (e) {
    if (!e.target.hasAttribute('src')) {
      modal.classList.remove('is-open')
  }
})
const allImages = document.querySelectorAll('.gallery__image')

window.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    modal.classList.remove('is-open')
  }
  if (e.code === "ArrowRight") {
    if (currentIndex === images.length - 1) {
      currentIndex = 0
    } else {
      currentIndex += 1
    }
  
    
  //   const li = document.querySelectorAll('.gallery__image')
  //   const modalImage = document.querySelector('.lightbox__image')
  
  // //   // найти индекс элемента который совпадает с текущим в модалке
  // //   findIndex
  //   li.forEach((elem) => {
  //     if (modalImage.src === elem.dataset.source) {
  //       elem.dataset.index += 1
  //     }
  //   })
  
  // } else {
    changeImage()
  }
  if (e.code === "ArrowLeft") {
    if (currentIndex === 0) {
      currentIndex = images.length - 1
    } else {
      currentIndex -= 1
    }
    
    changeImage()
  }
})
const modalImage = document.querySelector('.lightbox__image')
const closeBtn = document.querySelector('.lightbox__button')
function changeImage() {
  modalImage.src = images[currentIndex].original;
}
  console.log(currentIndex)
  