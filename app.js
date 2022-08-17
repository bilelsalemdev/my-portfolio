const links= document.querySelector('.links');
const ul=document.querySelector('.links ul');
const icon= document.querySelector('.links .icon')
const spans=document.querySelectorAll('.links .icon span')
let clicked=false;



function handleClick(){
    if(!clicked){
        spans[1].classList.add('clicked')
        spans[0].classList.add('rotate-right')
        spans[2].classList.add('rotate-left')
        clicked = true
        ul.style.display='block'
    }else{
        spans[1].classList.remove('clicked')
        spans[0].classList.remove('rotate-right')
        spans[2].classList.remove('rotate-left')
        ul.style.display='none'
        clicked = false
        
    }
   
}
const text="My name is Bilel - Front-End Devoloper";
let i=0;
function typing(){
    if(i<text.length){
        document.querySelector('.landing .intro-text p').innerHTML += text.charAt(i)
        i++;
        setTimeout(typing,100)
    }
}
typing()
