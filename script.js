var menu = document.querySelector(".fas.fa-bars"),
close = document.querySelector(".fas.fa-times"),
nav_mobile_list= document.querySelector(".nav_mobile_list"),
nav_mobile= document.querySelector(".nav_mobile"),
textbox = document.querySelector(".textbox"),
bg_img = document.querySelector(".bg_img");

menu.addEventListener("click", () => {
    nav_mobile_list.classList.add('active');
    nav_mobile.classList.add('active');
    textbox.classList.add('active');
    bg_img.classList.add('active');
});
close.addEventListener("click", () => {
    nav_mobile_list.classList.remove('active');
    nav_mobile.classList.remove('active');
    textbox.classList.remove('active');
    bg_img.classList.remove('active');
});

// var $cursor = $('.cursor');

// function moveCursor(e) {
//   $cursor.addClass('is-moving');
  
// 	TweenLite.to($cursor, 0.23, {
//     left: e.pageX,
//     top: e.pageY,
//     ease: Power4.easOut
//   });
  
//   clearTimeout(timer);

//    var timer = setTimeout(function() {
//        $cursor.removeClass('is-moving');
//    }, 300);
// }

// $(window).on('mousemove', moveCursor);