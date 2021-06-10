import {setHomepage} from './homepage.js'
import {setMenu} from './menu.js'
import {setContact} from './contact.js'
import './style.css'
window.onload = function () {
    let navBar = document.createElement('div');
    navBar.id = 'navBar';
    for (let i=0;i<3;i++){
        let btn = document.createElement('button')
        btn.id = `btn${i}`
        navBar.appendChild(btn)
    }
    document.body.appendChild(navBar)
    let homeBtn = document.getElementById('btn0');
    let menuBtn = document.getElementById('btn1');
    let contactBtn = document.getElementById('btn2');
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';
   


    //setHomepage();
    //setMenu();
    //setContact();
}