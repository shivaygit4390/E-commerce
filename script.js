const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

// slider property of the product description
let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");
smallimg[0].onmouseover = () =>{
    MainImg.src = smallimg[0].src;
}
smallimg[1].onmouseover = () =>{
    MainImg.src = smallimg[1].src;
}
smallimg[2].onmouseover = () =>{
    MainImg.src = smallimg[2].src;
}
smallimg[3].onmouseover = () =>{
    MainImg.src = smallimg[3].src;
}

smallimg[0].onclick = () =>{
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = () =>{
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = () =>{
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = () =>{
    MainImg.src = smallimg[3].src;
}