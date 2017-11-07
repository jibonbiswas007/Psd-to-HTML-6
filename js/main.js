$(document).ready(function(){
    
    $(".product-list").masonry();
    
    $('.hompage-slide').owlCarousel({
    loop:true,
    nav:true,
    navText:["<i class='fa fa-long-arrow-left'><i/>", "<i class='fa fa-long-arrow-right'><i/>"],
    smartSpeed:2000,
    animateIn:'fadeInRight',
    animateOut:'flipOutX',
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
    
    $('.product-promotion').owlCarousel({
    loop:true,
    nav:false,
    smartSpeed:2000,
    animateIn:'lightSpeedIn',
    animateOut:'zoomOut',
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
});