import './style.css'
const setContact = function (){
    let mainDiv = document.createElement('div');
    let header = document.createElement('h2');
    let contactCont = document.createElement('div');
    let tell = document.createElement('p');
    let email = document.createElement('p');
    let location = document.createElement('p');
    let workDays = document.createElement('p');
    mainDiv.id = 'main';
    contactCont.id = 'contactContainer';
    tell.classList.add('contactElement');
    email.classList.add('contactElement');
    location.classList.add('contactElement');
    workDays.classList.add('contactElement');
    header.textContent = 'Contact'
    tell.textContent = 'Telephone: 00 066 778 9231';
    email.textContent = 'Email: falafelkhana@falamail.chickpeas';
    location.textContent = 'Location: 123 falafel street, Chickpeas city, Republic of Beans';
    workDays.textContent = 'Working Days: Saturday - Sunday , 00:00 - 00:05';
    contactCont.appendChild(tell);
    contactCont.appendChild(email);
    contactCont.appendChild(location);
    contactCont.appendChild(workDays);
    mainDiv.appendChild(header);
    mainDiv.appendChild(contactCont);
    mainDiv.style.height = '100%';
    document.body.appendChild(mainDiv);
    
}
export {setContact}