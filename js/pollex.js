window.onscroll = function(){

scrollE();
}

function scrollE(){
    var cont = document.querySelector('#container');
    var cli = cont.getBoundingClientRect().top; //container의 위치 값을 찾기

    console.log(cli);
        if(cli < 790){
            cont.classList.add('show')
        }
}


