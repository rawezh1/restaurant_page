import falafel from './falafel_image.jpg';
import './style.css'
const setHomepage =  function () {
 let mainDiv = document.createElement('div');
 let header = document.createElement('h2');
 let homeCont = document.createElement('div');
 let discr = document.createElement('p');
 mainDiv.id = 'main';
 homeCont.id = 'homeContainer';
 discr.id = 'discr';
 header.textContent = 'Falafel Khana';
 discr.textContent = 'Do you love falafel? Then you have come to the right place! As this is the house of falafel with so many varieties to choice from!'
 homeCont.style.backgroundImage = `url(${falafel})`;
 homeCont.appendChild(discr);
 mainDiv.appendChild(header);
 mainDiv.appendChild(homeCont);
 document.body.appendChild(mainDiv);
}

export {setHomepage}