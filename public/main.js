var firebaseConfig = {
  apiKey: "AIzaSyCIrnk0bubF5kZ7DH7seoNBJeHSsSISrzk",
  authDomain: "apply-maxischmid.firebaseapp.com",
  databaseURL: "https://apply-maxischmid.firebaseio.com",
  projectId: "apply-maxischmid",
  storageBucket: "apply-maxischmid.appspot.com",
  messagingSenderId: "489119852536",
  appId: "1:489119852536:web:7456b9b9609d306fd7d80d",
  measurementId: "G-XZ16ZJJ9MV"
};
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

/* Load canditature */
let downloadButton = $(".btncontainer");
const docRef = firestore.collection('applications');

var projectId = window.location.pathname.replace('/', '')
if(projectId == '') {
  projectId = 'default';
}
docRef.doc(projectId).get().then((doc) => {
  if (doc && doc.exists) {
    downloadButton.css("display", "Block");
    $(".downloadBut").attr("href", doc.data().src);
  }
})



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



