const menu = document.getElementById('menu');
const to_top_btn = document.getElementById('to_top_btn');

menu.onclick = function MenuFunction() {
    var x = document.getElementById("myTopnav");
    if(x.className === 'topnav') {
        x.className += ' responsive';
    }else {
        x.className = 'topnav';
    }
}

window.onscroll = () => {
    scrollFunction();
}

to_top_btn.onclick = function toTop() {
    topFunction();
}

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to_top_box").style.display = "block";
    }else {
        document.getElementById("to_top_box").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}