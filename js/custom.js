// $(document).ready(function(){
  
// });


$(function(){

  var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    cssWidthAndHeight: true,

    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

        speed: 400,
    spaceBetween: 300,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: 5000,
    spaceBetween: 220,
      //
      slidesPerView: 2,
      //
      centeredSlides: true,
      //
      slidesOffsetBefore: 0,
      //
      grabCursor: true,
  });
  


      
  // var mySwiper = new Swiper ('.swiper-container', {
  //   speed: 400,
  //   spaceBetween: 300,
  //   initialSlide: 0,
  //   //truewrapper adoptsheight of active slide
  //   autoHeight: false,
  //   // Optional parameters
  //   // direction: 'horizontal',
  //   loop: true,
  //   // delay between transitions in ms
  //   autoplay: 5000,
  //   autoplayStopOnLast: false, // loop false also
  //   // If we need pagination
  //   // pagination: '.swiper-pagination',
  //   // paginationType: "bullets",
  //   pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true,
  //       },
  //   // Navigation arrows
  //   nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev',
    
  //   // And if we need scrollbar
  //   //scrollbar: '.swiper-scrollbar',
  //   // "slide", "fade", "cube", "coverflow" or "flip"
  //   effect: 'slide',
  //   // Distance between slides in px.
  //   spaceBetween: 220,
  //   //
  //   slidesPerView: 2,
  //   //
  //   centeredSlides: true,
  //   //
  //   slidesOffsetBefore: 0,
  //   //
  //   grabCursor: true,
  // })        



  $(".pro_item").hide();

  $(".pro_tab > ul > li").mouseover(function(){
    var index = $(this).index();
    $(".pro_item").hide();
    $(".pro_item").eq(index).show();
  })

  $(".pro_tab > ul > li").eq(0).trigger("click");
  $(".pro_item").eq(0).show();






})
