
new TypeIt("#element", {
  speed: 75,
  loop: true
})
  .type("I'm Maximilian Schmid")
  .pause(1000)
  .delete(17)
  .pause(1000)
  .type("a Developer")
  .pause(1000)
  .go();



$(function () {
  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: 'linear',
    scrollTime: 600,
    activeClass: 'active',
    onPageChange: null,
    topOffset: 0
  });
});


var winUI = $(window);
winUI.on("scroll", function () {
  var bodyScroll = winUI.scrollTop(),
    nav = $("nav");
  but = $(".navBut");
  title = $(".navTitle");
  if (bodyScroll > winUI.innerHeight() - 65) {
    nav.addClass("nav-scrolling");
    but.addClass("but-scrolling");
    title.addClass("but-scrolling");
  } else {
    nav.removeClass("nav-scrolling");
    but.removeClass("but-scrolling");
    title.removeClass("but-scrolling");
  }
})

//Card1
$("#portfolioCard1").mouseenter(function () {
  $("#portfolioCard1").addClass("active");
  $("#portfolioCard1 .cardBottom").stop().slideDown();
})

$("#portfolioCard1").mouseleave(function () {
  $("#portfolioCard1 .cardBottom").slideUp(function () {
    $("#portfolioCard1").removeClass("active");
  });
})


//Card2
$("#portfolioCard2").mouseenter(function () {
  $("#portfolioCard2").addClass("active");
  $("#portfolioCard2 .cardBottom").stop().slideDown();
})
$("#portfolioCard2").mouseleave(function () {
  $("#portfolioCard2 .cardBottom").slideUp(function () {
    $("#portfolioCard2").removeClass("active");
  });
})


