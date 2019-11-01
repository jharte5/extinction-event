const lineThrough = document.querySelectorAll('ol li')

function strikeOut(event) {
    event.target.style.textDecoration = 'line-through'
    
}
    for (let i = 0; i < lineThrough.length; i++) {
      lineThrough[i].addEventListener('click', strikeOut);
    }

const disappearingLines = document.querySelectorAll('ul li')

function lightsOut(event) {
    event.target.style.opacity = 0
}
    for (let i = 0; i <disappearingLines.length; i++) {
        disappearingLines[i].addEventListener('click', lightsOut)
    }

const vanishingImages = document.querySelectorAll('img')

function poofBeGone (event) {
    event.target.style.width = '0px'
}
    for (let i= 0; i < vanishingImages.length; i++) {
        vanishingImages[i].addEventListener('click', poofBeGone)
    }

const doEverything = document.querySelectorAll('button')

function doItAll() {
    
    for (let i = 0; i < lineThrough.length; i++) {
        lineThrough[i].addEventListener('click', strikeOut);
    }
    for (let i = 0; i <disappearingLines.length; i++) {
        disappearingLines[i].addEventListener('click', lightsOut)
    }
    for (let i= 0; i < vanishingImages.length; i++) {
        vanishingImages[i].addEventListener('click', poofBeGone)
    }
    doEverything.addEventListener('click', doItAll)
}

    


