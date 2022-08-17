const links= document.querySelector('.links');
const ul=document.querySelector('.links ul');
const icon= document.querySelector('.links .icon')
const spans=document.querySelectorAll('.links .icon span')
let clicked=false;
function handleClick(){
    ul.style.display ='block' ;
    spans[1].style.display='none';
    spans[0].style.transform = 'rotate(45deg)';
    spans[2].style.transform='rotate(-45deg)'
    clicked = true;
    
}
function doNotHandleClick(){
    ul.style.display='none'
    spans[1].style.display='block';
    spans[0].style.transform = 'rotate(0deg)';
    spans[2].style.transform='rotate(0deg)'
    clicked = false;

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