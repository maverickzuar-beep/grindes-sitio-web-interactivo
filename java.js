// SLIDER 1
document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector('.timeline-container');
    const items = document.querySelectorAll('.timeline-item');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    let index = 0;
    const total = items.length;

    container.style.width = `${total * 100}vw`;

    function updateSlide(){
        container.style.transform = `translateX(-${index * 100}vw)`;
    }

    next.addEventListener("click", function(){
        if(index < total - 1){
            index++;
            updateSlide();
        }
    });

    prev.addEventListener("click", function(){
        if(index > 0){
            index--;
            updateSlide();
        }
    });

});

// SLIDER 2
document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector('.tricks-container');
    const items = document.querySelectorAll('.trick-item');
    const next = document.querySelector('.trick-next');
    const prev = document.querySelector('.trick-prev');

    let index = 0;
    const total = items.length;

    function updateSlide(){
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", function(){
        if(index < total - 1){
            index++;
            updateSlide();
        }
    });

    prev.addEventListener("click", function(){
        if(index > 0){
            index--;
            updateSlide();
        }
    });

});

// SLIDER 3
document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector('.legends-slider');
    const items = document.querySelectorAll('.legend-item');
    const next = document.querySelector('.legend-next');
    const prev = document.querySelector('.legend-prev');

    let index = 0;
    const total = items.length;

    function updateSlide(){
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", function(){
        if(index < total - 1){
            index++;
            updateSlide();
        }
    });

    prev.addEventListener("click", function(){
        if(index > 0){
            index--;
            updateSlide();
        }
    });
});
