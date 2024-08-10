// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('open');
// }
// let searchform = document.querySelector('search-form');
// document.querySelector('search-box').onclick = () =>{
//     searchform.classList.toggle('open');
// }

let navbar= document.getElementById('navbar');
let header=document.getElementById('header');

function show(){
    navbar.classList.toggle('open');
    header.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    // Page load hone se pehle loader dikhana aur content chhupana
    document.getElementById('loader').style.display = 'block';
    document.querySelector('.content').style.display = 'none';

    // 3 seconds ke baad loader chhupana aur content dikhana
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 5000);
});