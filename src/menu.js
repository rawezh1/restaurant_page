const setMenu = function () {
    let mainDiv = document.createElement('div');
    let menuCont = document.createElement('div');
    mainDiv.id = 'main';
    menuCont.id = 'menuContainer';
    for (let i=0;i<4;i++){
        let menuItem = document.createElement('div');
        menuItem.id = `${i}`;
        menuCont.appendChild(menuItem)
    }
    mainDiv.appendChild(menuCont)
    document.body.appendChild(mainDiv)
    document.getElementById('0').innerHTML = 'Classic Falafel';
    document.getElementById('1').innerHTML = 'Fava Falafel';
    document.getElementById('2').innerHTML = 'Green Falaefl';
    document.getElementById('3').innerHTML = 'Spicy Falafel';
    
}
export {setMenu}