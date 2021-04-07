// $(document).ready(function(){
  
// });


$(function(){

  var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    slidesPerView: 3,
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
  });
  

})
