/* nav bar starts */

const links= document.querySelector('.links');
const ul=document.querySelector('.links ul');

const navSpans=document.querySelectorAll('.links .icon span')
let clicked=false;



function handleClick(){
    if(!clicked){
        navSpans[1].classList.add('clicked')
        navSpans[0].classList.add('rotate-right')
        navSpans[2].classList.add('rotate-left')
        clicked = true
        ul.style.display='block'
    }else{
        navSpans[1].classList.remove('clicked')
        navSpans[0].classList.remove('rotate-right')
        navSpans[2].classList.remove('rotate-left')
        ul.style.display='none'
        clicked = false
        
    }
   
}

/* nav bar ends */
/* animated numbers start*/

let nums=document.querySelectorAll('.nums .num')
let srv= document.querySelector('.col .srv')
let started =false;
 function animatedNumbers(){
    if(window.scrollY >= section.offsetTop + 200){
        if(!started){
            nums.forEach((num)=> startCount(num));
        }
        started = true;
            
    }
}
window.addEventListener('scroll',animatedNumbers)
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=> {
        el.textContent++;
        if(el.textContent === goal){
            clearInterval(count)
        }
    },2000 / goal)
    
}
/* animated numbers end*/

/* text starts */

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

/* text ends */
/* progress bar starts */
let section = document.querySelector('.one')
let spans = document.querySelectorAll('.progress span');
function animatedprogressBar(){
    if(window.scrollY >= section.offsetTop - 200){
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        });
    }
};
window.addEventListener('scroll',animatedprogressBar) 
/* progress bar ends */
/* up starts */
    let icon=document.querySelector('.up')
    function Up(){
        if(window.scrollY >= 700){
            icon.classList.add('show')
        }else{
            icon.classList.remove('show')
        }
    }
    window.addEventListener('scroll',Up)
    function scrolling(){
        window.scrollTo({
            top : 0,
            behavior : "smooth",
        })
    }
    icon.addEventListener('click',scrolling)
/* up ends */
