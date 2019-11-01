const lineThrough = document.querySelectorAll('ol li')

function strikeOut(event) {
    event.target.style.textDecoration = 'line-through'
    
}
    for (let i = 0; i < lineThrough.length; i++) {
      lineThrough[i].addEventListener('click', strikeOut);
    }

const disappearingLines = document.querySelectorAll('ul li')

function lightsOut(event) {
    event.target.style
}


 

