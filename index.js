const menu = document.getElementById('menu');

menu.onclick = function MenuFunction() {
    var x = document.getElementById("myTopnav");
    if(x.className === 'topnav') {
        x.className += ' responsive';
    }else {
        x.className = 'topnav';
    }
}
