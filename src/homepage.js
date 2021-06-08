import Falafel from './falafel_image.jpg';
const setHomepage =  function () {
 let contentDiv = document.getElementById('content');
 let headLine = document.createElement('h1');
 let discr = document.createElement('p');
 let image = document.createElement('img');
 headLine.innerHTML = 'Falafel Khana';
 discr.innerHTML = 'Do you love falafel? Then you have come to the right place! As this is the house of falafel with so many varieties to choice from!'
 image.src = Falafel;
 headLine.setAttribute('style', 'background-color: rgb(197, 63, 63);')
 image.setAttribute('style','max-width: 100%; max-height: 100%;')
 contentDiv.appendChild(headLine);
 contentDiv.appendChild(discr);
 contentDiv.appendChild(image);
}

export {setHomepage}