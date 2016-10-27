/**
 * Created by qixinghai on 16/10/27.
 */

/*
var myHeading = document.querySelector('h1');
myHeading.innerHTML = "Hello World!";


document.querySelector('html').onclick = function () {
    alert('Ouch! stop poking me');
}*/

var myImage = document.querySelector('img');
myImage.onclick = function () {

    var src = myImage.getAttribute('src');
    if(src == 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/master-joda.png');
    }else{
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool,' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storeName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool,' + storeName;
}
myButton.onclick = function () {
    setUserName();
}


