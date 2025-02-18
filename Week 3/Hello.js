const redligt = document.getElementById('.red-light');
const yellowlight = document.getElementById('.yellow-light');
const greenlight = document.getElementById('.green-light');

function startSignal(){
    setTimeout(function(){
        redligt.style.opacity = 1;
        yellowlight.style.opacity = 0;
        greenlight.style.opacity = 0;
        redligt.style.display = 'block';
    },1000);
    setTimeout(function(){
        redligt.style.opacity = 0;
        yellowlight.style.opacity = 1;
        greenlight.style.opacity = 0;
        yellowlight.style.display = 'block';
    },5000);
    setTimeout(function(){
        redligt.style.opacity = 0;
        yellowlight.style.opacity = 0;
        greenlight.style.opacity = 1;
        greenlight.style.display = 'block';
    },8000);
        
}
const mainTimer = setInterval(function(){
    startSignal();
}, 12000);

startSignal();