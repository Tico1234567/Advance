let modal = document.querySelector('.modal');
let openBtn = document.querySelector('.btn--show-modal');
let closeBtn = document.querySelector('.btn--close-modal');
let overlay = document.querySelector('.overlay');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const section1 = document.querySelector('.nav');



openBtn.addEventListener('click', function(){
 modal.classList.remove('hidden');
 overlay.classList.remove('hidden');
})
overlay.addEventListener('click', function(){
 modal.classList.add('hidden');
 overlay.classList.add('hidden');
})

closeBtn.addEventListener('click', function(){
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
})



modal = document.querySelector('.modal');
openBtn = document.querySelector('.btn--show-put');
closeBtn = document.querySelector('.btn--close-modal');
overlay = document.querySelector('.overlay');


openBtn.addEventListener('click', function(){
 modal.classList.remove('hidden');
 overlay.classList.remove('hidden');
})
overlay.addEventListener('click', function(){
 modal.classList.add('hidden');
 overlay.classList.add('hidden');
})

  closeBtn.addEventListener('click', function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})

// To sellect the whole elememt
// SELLECTING ELEMENTS WITH DOM //
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)
const header = document.querySelector('.header')
const allSection = document.querySelectorAll('.section')
console.log(allSection)

document.getElementById('section--1')
const allButton = document.getElementsByTagName('button')
console.log(allButton)

const btn = document.getElementsByClassName('btn')
console.log(btn)

// METHOD FOR CREATING AND INSERTING ELEMENTS //

const message = document.createElement('div')
message.classList.add('cookie-message')

message.innerHTML = 'we use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it<button/>'
header.prepend(message)

// message.addEventListener ('click',function(){
//   message.classList.add('hidden');
// })

// header.append(message.cloneNode(true))

header.after(message)
// header.before(message)

// HOW WE DELETE ELEMENT

document.querySelector('.btn--close-cookie').addEventListener ('click', function (){
  message.remove()
})

// HOW WE ADD STYLE ATTRIBUTE AND CLASSES

message.style.backgroundColor = '#37383d'
message.style.width = '100%'
message.style.color = ''
message.style.height = ''
// console.log(getComputedStyle(message).height)

console.log(getComputedStyle(message).color)
console.log(message.style.height)

message.style.height = Number.parseFloat(getComputedStyle(message).height + 10)+400 + 'px'

document.documentElement.style.setProperty('--color-primary', 'orangered')

const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.src)
console.log(logo.className)

logo.alt = 'Beautiful minimalist logo';
console.log(logo.designer)

// logo.getAttribute('designer')
console.log(logo.getAttribute('data-version-number'))

console.log(logo.setAttribute('company','Bankist'));
console.log(logo)

// Implementing smooth scrooling SMOOTH SCROLLING 1

// const learMoreBtn = document.querySelector('.btn--scroll-to');
// const feauture = document.querySelector('#section--1');

// const feauture2 = document.querySelector('#section--1');
// const navLink = document.querySelector('.nav__links')


// learMoreBtn.addEventListener('click', function(e){
// feauture.scrollIntoView({behavior:'smooth'})
  
// });
//  document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
  
// if (e.target.classList.contains('nav__link')) {
//   const id = e.target.getAttribute('href');
//   document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
// }
// });

// Event is a signal generated by a certain dom node,signal means sometyn that happen on a webpage generate an event.//


// Types of Event ........//
//1 Mouse Enter Event 

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e){
//   alert('addEventListener: Tico you are Blessed')
// })

//2 onmouse enter 

// h1.onmouseenter = function (e){
//   alert('onmouseenter: Tico you are too much')
// }

const alertH1 = function (e){
  alert('onmouseenter: Tico you are Blessed')
}

h1.addEventListener('mouseenter', alertH1)
// Option to remove eventlistener 

h1.removeEventListener('mouseenter', alertH1)

// Event propagation and Deligation

// EVENT PROPAGATION

// in javascript we have both capturing phase bubbling phase

//  the dom generate a click event .... the event started from the root of the document at the very top of the DOM,from there the so called capturing phase happened.as the event travels down it will pass through the every single parent element of the target elemet . the event can only be handle in the bulbling phase


// const randomInt = (min, max) =>
//    Math.floor(Math.random() * (max - min + 1) + min)

// const randomColor = () => 
//   `rgb(${randomInt(0, 225)}, ${randomInt(0, 225)}, ${randomInt(0, 225)})`

// document.querySelector('.nav__link').addEventListener('click', function (e){
//   e.preventDefault()
//   this.style.backgroundColor = randomColor()
//   console.log('LINKS',e.target,e.currentTarget)

  // Stop Propagation

//   e.stopImmediatePropagation()
  

// document.querySelector('.nav__links').addEventListener('click', function (e){
//   this.style.backgroundColor = randomColor()
//   console.log('CONTAINER',e.target,e.currentTarget)
// })
// document.querySelector('.nav').addEventListener('click'
// , function (e){
//   this.style.backgroundColor = randomColor()
//   console.log('NAV',e.target,e.currentTarget)
// }, true)

// SMOOTH SCROLLING P2 

// THE TARGET IS ESSENTIALLY WHERE THE EVENT ORIGINATED

document.querySelectorAll('.nav__link').forEach(function (el){
  el.addEventListener('click', function (e){
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
  })
});

// Event deligation 

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   // Matching strategy
  
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
//   }
// });

// Tab component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Removed active classes

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active class
  clicked.classList.add('operations__tab--active');

  // Active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active')
});

// Sticky Navigation

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky')
});

// slider

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const dotContainer = document.querySelector('.dots')

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translatex(-900px)'
// slider.style.overflow = 'visible';

// slides.forEach(
//   (slide, i) => (slide.style.transform = `translateX(${i * 100}%)`)
// );

const createDots = function () {
  slides.forEach((s, i) => {
    dotContainer.insertAdjacentHTML('beforeend',`
    <button class="dots__dot" data-slide="${i}"></button>
    `)
  })
}

createDots();

const activateDot = function (slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove
    ('dots__dot--active'))

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}
activateDot(0);

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`) 
  )
}

goToSlide(0);

let curSlide = 0;
const maxSlide = slides.length - 1  

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide){
    curSlide = 0
  } else{
    curSlide++
  }
  
  goToSlide(curSlide)
  activateDot(curSlide)
}

// Previous Slide

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  }else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide)
}
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// let position = 1;
// let length = 0;

// window.addEventListener('keydown', e => {
//   switch (e.code) {
//     case 'ArrowLeft':
    
//     if (length > 0 ) {
//       moveLeft();
//     }
//       break;
//           case  'ArrowRight':
//         if (length > 0 ) {
//           moveRight();
//         }
//       }
//         });

document.addEventListener('keydown', function (e){
  console.log(e.key)

if (e.key === 'ArrowLeft') prevSlide()
if (e.key === 'ArrowRight') nextSlide()
})

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide
    // console.log(slide)
    goToSlide(slide)
    activateDot(slide)
  }
})

// lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets)

const loadImg = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // replace src with data-src

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);

};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

// // Reveal section
const allSection1 = document.querySelectorAll('.section')

const revealSection = function (entries) {
  const [entry] = entries
  console.log(entry)

  if (!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

allSection1.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

