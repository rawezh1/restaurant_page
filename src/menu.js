import './style.css'
import classic from './classic.jpeg'
import spicy from './spicy.jpg'
import fava from './fava.jpg'
import green from './green.jpg'
import falafel from './falafel_image.jpg';
const setMenu = function () {
    let mainDiv = document.createElement('div');
    let menuCont = document.createElement('div');
    let header = document.createElement('h2');
    header.innerHTML = 'Menu'
    mainDiv.id = 'main';
    menuCont.id = 'menuContainer';
    mainDiv.appendChild(header)
    for (let i=0;i<4;i++){
        let menuItem = document.createElement('div');
        let itemDisc = document.createElement('p')
        let combine = document.createElement('div')
        menuItem.id = `item${i}`;
        itemDisc.id = `item${i}Disc`;
        combine.id = `combine${i}`;
        menuItem.classList.add('item');
        itemDisc.classList.add('itemDisc');
        combine.classList.add('combine');
        combine.appendChild(menuItem);
        combine.appendChild(itemDisc);
        menuCont.appendChild(combine);
    }
    mainDiv.appendChild(menuCont)
    document.body.appendChild(mainDiv)
    mainDiv.style.backgroundImage = falafel;
    let item0 = document.getElementById('item0')
    let item1 = document.getElementById('item1')
    let item2 = document.getElementById('item2')
    let item3 = document.getElementById('item3')
    let item0Disc = document.getElementById('item0Disc')
    let item1Disc = document.getElementById('item1Disc')
    let item2Disc = document.getElementById('item2Disc')
    let item3Disc = document.getElementById('item3Disc')
    let combine0 = document.getElementById('combine0')
    let combine1 = document.getElementById('combine1')
    let combine2 = document.getElementById('combine2')
    let combine3 = document.getElementById('combine3')

    
    item0.textContent = 'CLASSIC FALAFEL  $2';
    item1.textContent = 'FAVA FALAFEL  $3';
    item2.textContent = 'GREEN FALAFEL  $3';
    item3.textContent = 'SPICY FALAFEL  $4';
    item0Disc.textContent = `Ingredients: Chickpeas, Garlic, Coriander Powder, Salt`;
    item0Disc.setAttribute('style','color:rgb(250, 142, 0);')
    item1Disc.textContent = `Ingredients: Fava beans, Onion, Cumin Powder, Salt`;
    item1Disc.setAttribute('style','color:white;')

    combine0.style.backgroundImage = `url(${classic})`;
    combine1.style.backgroundImage = `url(${fava})`;
    combine2.style.backgroundImage = `url(${green})`;
    combine3.style.backgroundImage = `url(${spicy})`

}
export {setMenu}