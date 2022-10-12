$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 68){
            $('header .header-2').addClass('header-active');
         }else{
             $('header .header-2').removeClass('header-active');
         }

        $('section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){                       
                $('.navbar ul li a').removeClass('active');                   
                $('.navbar').find(`[href="#${id}"]`).addClass('active');      
            }

        });

    });

    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        autoplay:true,
        autoplayTimeout:6000,
        loop:true
    });

    $('.small-image img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);

    });

    $('.deal .btn').click(function(){

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.deal .box').show(400);
        }else{
            $('.deal .box').not('.'+filter).hide(200);
            $('.deal .box').filter('.'+filter).show(400);
        }

        $(this).addClass('button-active').siblings().removeClass('button-active');

    });


});

function maildone(){

    alert("You will be notified via email")

}

var modal = document.getElementById('id01');
window.onclick = function(event) {

    if (event.target == modal) {

        modal.style.display = "none";

    }
}

function myFunction() {
    
    var element = document.body;
    element.classList.toggle("dark-mode");

 }






