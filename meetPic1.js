let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
    current = 0;

// Clear all images 
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages [i].style.display = 'none';
    }
}

//Init slider

function startSlider(){
    reset();
    sliderImages[0].style.display = 'block';
}

// Show previous
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// Show next
function slideRight(){
    reset();
    sliderImages[current +1].style.display = 'block';
    current++;
}


//left arrow click
arrowLeft.addEventListener('click', function (){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

//right arrow click
arrowRight.addEventListener('click', function (){
    if(current === sliderImages.length -1){
        current = -1;
    }
    slideRight();
});

startSlider();


//js footer
function myFunction() {
  document.getElementById("footer1").style.backgroundColor = "#011a26" ;
  document.querySelector("header>.box").style.backgroundColor = "#011a26";
  document.getElementById("three").style.backgroundColor = "#011a26";
  document.getElementById("box").style.color = "#ffffff"
  document.getElementById("sectionII").style.backgroundColor = "#011a26";
  document.getElementById("sectionII").style.color = "#ffffff"
  }
  

  