const images = [
    {'id':'20', 'url':'./img/20.jpg'},
    {'id':'1', 'url':'./img/1.jpg'},
    {'id':'2', 'url':'./img/2.jpg'},
    {'id':'3', 'url':'./img/3.jpg'},
    {'id':'4', 'url':'./img/4.jpg'},
    {'id':'5', 'url':'./img/5.jpg'},
    {'id':'6', 'url':'./img/6.jpg'},
    {'id':'7', 'url':'./img/7.jpg'},
    {'id':'8', 'url':'./img/8.jpg'},
    {'id':'9', 'url':'./img/9.jpg'},
    {'id':'10', 'url':'./img/10.jpg'},
    {'id':'11', 'url':'./img/11.jpg'},
    {'id':'12', 'url':'./img/12.jpg'},
    {'id':'13', 'url':'./img/13.jpg'},
    {'id':'14', 'url':'./img/14.jpg'},
    {'id':'15', 'url':'./img/15.jpg'},
    {'id':'16', 'url':'./img/16.jpg'},
    {'id':'17', 'url':'./img/17.jpg'},
    {'id':'18', 'url':'./img/18.jpg'},
    {'id':'19', 'url':'./img/19.jpg'},
]

const carouselItems = document.querySelector('#carouselItems')
const bodyBG = document.querySelector('#body')


const loadImages = (images, carouselItems) => {
    images.forEach(image => {
        carouselItems.innerHTML += `
            <img class="item" src="${image.url}">
        `
    })
}

loadImages(images, carouselItems)

let items = document.querySelectorAll('.item')
let bodyBg = document.querySelector('#body')

const prev = () => {
    carouselItems.appendChild(items[0])
    let itemSel = items[2]
    let bgPhoto = itemSel.getAttribute('src')
    bodyBg.style.backgroundImage = `url(${bgPhoto})`
    items = document.querySelectorAll('.item')
}


const next = () => {
    const lastItem = items[items.length - 1]
    carouselItems.insertBefore(lastItem, items[0])
    let itemSel2 = items[0]
    let bgPhoto2 = itemSel2.getAttribute('src')
    bodyBg.style.backgroundImage = `url(${bgPhoto2})`
    items = document.querySelectorAll('.item')
}

document.querySelector('#prev').addEventListener('click', prev)
document.querySelector('#next').addEventListener('click', next)
