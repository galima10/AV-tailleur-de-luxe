const slideContainer = document.querySelector("#carrousel .displayFLex");
const slides = document.querySelector("#carrousel .displayFLex ul");

const btnLeft = document.querySelector("#carrouselBtnLeft");
const btnRight = document.querySelector("#carrouselBtnRight");

function slider(btnL, btnR, slider, slides) {
  const styleSlider = slider.getBoundingClientRect();
  const styleSlides = slides.getBoundingClientRect();
  btnL.addEventListener("click", () => {
    if (styleSlides.right < styleSlider.right) {
      slides.style.left = `-${styleSlides.left - styleSlider.width}px`;
    }
  });
}

slides.style.left='0'

const numberOfSlides = slides.children.length;
let currentSlide = 1;

function slideToLeft(){
  const styleSlider = slideContainer.getBoundingClientRect();
  const styleSlides = slides.getBoundingClientRect(); 
  
  if (currentSlide<numberOfSlides){
    slides.style.left = `${styleSlides.left - styleSlider.width - styleSlider.left}px`;
    currentSlide++;
  } else {
    currentSlide=1;
    slides.style.left='0'
  }
}
function slideToRight(){
  const styleSlider = slideContainer.getBoundingClientRect();
  const styleSlides = slides.getBoundingClientRect();

  if (currentSlide-1>0){
    slides.style.left = `${styleSlides.left + styleSlider.width - styleSlider.left}px`;
    currentSlide--;
  } else {
    currentSlide=numberOfSlides;
    slides.style.left=`-${styleSlider.width + styleSlides.right}px`
  }
  
}
let interval;
function loopSlider(){
  interval = setInterval(() => {
    slideToLeft()
  }, 4000);
}
loopSlider()

// console.log(styleSlides.left,styleSlider.width);
btnRight.addEventListener("click", () => {
  slideToLeft();
  clearInterval(interval)
  loopSlider()
  
});
btnLeft.addEventListener("click", () => {
  slideToRight();
  clearInterval(interval)
  loopSlider()
});



