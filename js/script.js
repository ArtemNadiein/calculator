"use stricr";
var resEqual = function () {
    var str = document.getElementById('calc').innerHTML;
    if (/^(((\.|-|[0-9]|√\.?[0-9])[0-9]*[,\.+\-\/*]?)+([0-9]+|√\.?[0-9]+)|(\.|-|√\.?)?[0-9]*)$/.test(str)) {
        str = str.replace(new RegExp("√([,\.0-9]+)", 'g'), "Math.sqrt($1)");
        str = str.replace(new RegExp(",", 'g'), ".");
        document.getElementById('calc').innerHTML = +eval((str === '') ? 0 : str).toFixed(10);
        return document.getElementById('calc').innerHTML;
    } else {
        document.getElementById('calc').innerHTML = 'WWWRONG!';
    }
};
var memories = 0;
document.body.addEventListener('keyup', keyboardUp, false);
document.body.addEventListener('keypress', keyboard, false);
document.body.addEventListener('click', check, false);
document.body.addEventListener('keypress', check, false);
var classname = document.body.getElementsByClassName('button');
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', showPopup, false);
}
function keyboard(e) {
    if (e.which < 42 || e.which > 45 && e.which < 47 || e.which > 57) {
        if (e.which !== 13 && e.which !== 61 && e.which !== 110) {
            return;
        }
    }
    switch (e.which) {
        case 42:
            showPopup(null, 'splash');
            break;
        case 43:
            showPopup(null, 'kapow');
            break;
        case 45:
            showPopup(null, 'grrr');
            break;
        case 47:
            showPopup(null, 'crack');
            break;
    }
    if (e.which === 13 || e.which === 61) {
        showPopup(null, 'boom');
        resEqual();
        return;
    }
    document.getElementById('calc').innerHTML += String.fromCharCode(e.which);
}
function keyboardUp(e) {
    if (e.which === 8) {
        showPopup(null, 'snack');
        document.getElementById('calc').innerHTML = document.getElementById('calc').innerHTML.substring(0, document.getElementById('calc').innerHTML.length - 1);
    } else if (e.which === 46) {
        showPopup(null, 'pufff');
        document.getElementById('calc').innerHTML = '';
    }
}
function showPopup(e, target) {
    var tg = (target === undefined) ? e.target.dataset.img : target;
    document.getElementById(tg).style.display = 'block';
    setTimeout(function () {
        document.getElementById(tg).style.display = 'none';
    }, 500);
}
function check() {
    if (document.getElementById('calc')) {
        var txt = document.getElementById('calc').innerHTML;
        if (txt.length > 12) {
            document.getElementById('calc').innerHTML = txt.substr(0, 12);
        }
    }
}