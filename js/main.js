// main jquery functions




 // sticky header
 $(window).on("scroll", function () {
          if ($(window).scrollTop() > 30) {
          $("header").addClass("affix");
          } else {
          $("header").removeClass("affix");
          }
         });


 // main slider

 $('.main-slider ul').slick({
  infinite: true,
  slidesToShow: 1,
  autoplay:true,
  autoplay:true,
  slidesToScroll: 1,
  fade:true,
  arrows:false,
  speed: 3000,
});


  // service-grid-slider

 $('.service-grid-slider').slick({
  dots: true,
  infinite: true,
  speed: 3000,
  arrows:false,
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 4,
  pauseOnHover:false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 560,
      settings: {
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Innovation-slider

 $('.innovation-slider').slick({
  dots: true,
  infinite: true,
  speed: 3000,
  arrows:false,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover:false,
});


// service-grid-slider

 $('.specialty-slide').slick({
  dots: true,
  infinite: true,
  speed: 3000,
  arrows:false,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover:false,
});

 // service-grid-slider

 $('.client-review-slider').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  arrows:false,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover:false,
});


 // solution-grid-slider

 $('.solution-slider').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  arrows:false,
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover:false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    ]
});

 // solution-grid-slider

 $('.client-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay:true,
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnHover:false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots:false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    ]
});


// preloader

jQuery(document).ready(function() { 
$(window).load(function() {
    $("#status").fadeOut("slow"); 
    $("#preloader").delay(500).fadeOut("slow").remove();
}) 
});

// mousehover
$(function(){
  $(".service-grid").on({
   mouseenter: function(){
    $(this).find('.arrow-nav img').attr('src','images/white-arrow.png');
  },
  mouseleave: function(){
    $(this).find('.arrow-nav img').attr('src','images/arrow-right.png');
  }
  });
  
});


// mousehover
$(function(){
  $(".service-grid").on({
   mouseenter: function(){
    $(this).find('.arrow-nav img').attr('src','images/white-arrow.png');
  },
  mouseleave: function(){
    $(this).find('.arrow-nav img').attr('src','images/arrow-right.png');
  }
  });
  
});

//window width

jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww <= 920) {
      $('.nav-link').addClass('mobile-nav');
    } 
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();


  $('.mobile-nav').on('click', function(){
    $(this).find('.dropdown').toggleClass('open');
});
  
});


