// $(document).ready(function(){
  
// });


$(function(){

  var swiper = new Swiper('.main_slide', {
    centeredSlides: true,
		slidesPerView: 'auto',
		// lazy: {
		// 	loadPrevNext: true,
		//   },
		preloadImages: false,
    spaceBetween: 100,
    loop: true,
		autoplay: {
		  delay: 2000,
			disableOnInteraction: false,
		},
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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






    //initialize swiper when document ready
    var mySwiper = new Swiper('.album_slide', {
      // Optional parameters 
      slidesPerView: 'auto', // ??????????????? ????????? 3?????? ????????????
      // loopFillGroupWithBlank : true,
      loop: true, // loop ??? true ??? ????????? ???????????? ????????????, false ??? ????????? ??????????????? ????????? ??????????????? ??????
      // If we need pagination 
      pagination: {
          el: '.album-swiper-pagination',
          clickable : true, // ???????????? ???????????? ?????? ???????????? ??????, ????????? ????????? ?????? ?????? ??????
          // type: 'progressbar', // And if we need scrollbar ?????????
      },
      
      // Navigation arrows 
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      centeredSlides: true,
      slidesPerView: 5,
      spaceBetween: 0,
  })




  var frame_idx = $('iframe').index();
  	console.log(frame_idx);

    $('iframe').hide();
    $("iframe").eq(0).show();


})
