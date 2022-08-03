$(window).on('load', function (){
    $('.sec1_txt strong').addClass('gogo');
    $('.sec1_txt p').addClass('gogo');
    $('.sec2_title').addClass('showshow');
    $('.sec2_subtitle').addClass('showshow')
});


//pollexzone 밑줄
$('strong').toggleClass('changed');


window.onscroll = function(){

    scrollA();
    scrollB();
    scrollC();
    scrollD();
    scrollF();
    }

    function scrollA(){
        var cont2 = document.querySelector('#cl_container');
        var cli2 = cont2.getBoundingClientRect().top; //container의 위치 값을 찾기


        console.log(cli2);

            if(cli2 < 700){
                cont2.classList.add('show')
            }

            $('strong').toggleClass('changed2');


    }
    
    function scrollB(){
        var cont3 = document.querySelector('#mid_container');
        var cli3 = cont3.getBoundingClientRect().top; //container의 위치 값을 찾기

        if(cli3 < 800){
            cont3.classList.add('show')
        }

    }
    
    function scrollC(){
        var cont4 = document.querySelector('#sec2_img');
        var cli4 = cont4.getBoundingClientRect().top; //container의 위치 값을 찾기

        if(cli4 < 800){
            cont4.classList.add('img_show')
        }
    }

    function scrollD(){
        var cont5 = document.querySelector('#content_txt');
        var cli5 = cont5.getBoundingClientRect().top; //container의 위치 값을 찾기

        if(cli5 < 700){
            cont5.classList.add('txt_show')
        }
    }

    function scrollF(){
        var cont6 = document.querySelector('#mid_container');
        var cli6 = cont6.getBoundingClientRect().top; //container의 위치 값을 찾기

        if(cli6 < 1200){
            $('.logo1').addClass('logo_changed')
            $('.logo2').addClass('logo2_changed')
            $('.logo3').addClass('logo3_changed')
        }
    }




