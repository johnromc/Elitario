const $nextBtn = document.querySelector('.next-btn'),
$prevBtn = document.querySelector('.prev-btn'),
$slides  = document.querySelectorAll('.slide'),
$slidesIcon= document.querySelectorAll('.slide-icon'),
numberOfSlides = $slides.length;
let slideNumber = 0;

$nextBtn.addEventListener('click',()=>{
    $slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
    $slidesIcon.forEach((slideIcon) =>{
        slideIcon.classList.remove('active')
    })


    slideNumber++;

    if(slideNumber > (numberOfSlides -1)){
        slideNumber = 0; 
    }

    $slides[slideNumber].classList.add('active');
    $slidesIcon[slideNumber].classList.add('active');
})