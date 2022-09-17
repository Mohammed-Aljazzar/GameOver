var toUp = document.querySelector('.toUp');

window.onscroll = function() {
    if(window.scrollY > 50){
        toUp.style.visibility = 'visible';
    }else if(window.scrollY <= 50){
        toUp.style.visibility = 'hidden'; 
    }
}

toUp.onclick = function() {
    window.scrollTo({
        top:0 ,
        left :0 ,
        scroll : 'smooth'
    })
}


