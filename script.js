const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
       color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

console.log(randomColor()); // 0-15
let intervalId;

const startchangingcolor = function() {
    if (!intervalId) {
        intervalId = setInterval(function() {
            const newColor = randomColor();
            document.body.style.backgroundColor = newColor;
            document.querySelector('h1').innerHTML = ` Generated  color  code is:${newColor}`;
        }, 900);
    }
}


document.querySelector("#start").addEventListener('click',startchangingcolor);

const stopchangingcolor=function(){
    clearInterval(intervalId);
    intervalId=null;
}

document.querySelector("#stop").addEventListener('click',stopchangingcolor);
