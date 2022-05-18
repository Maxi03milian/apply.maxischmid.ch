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
if (projectId == '') {
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
  .type("               ")
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

//Card3
$("#portfolioCard3").mouseenter(function () {
  $("#portfolioCard3").addClass("active");
  $("#portfolioCard3 .cardBottom").stop().slideDown();
})
$("#portfolioCard3").mouseleave(function () {
  $("#portfolioCard3 .cardBottom").slideUp(function () {
    $("#portfolioCard3").removeClass("active");
  });
})

//Card3
$("#portfolioCard4").mouseenter(function () {
  $("#portfolioCard4").addClass("active");
  $("#portfolioCard4 .cardBottom").stop().slideDown();
})
$("#portfolioCard4").mouseleave(function () {
  $("#portfolioCard4 .cardBottom").slideUp(function () {
    $("#portfolioCard4").removeClass("active");
  });
})


// Observer for Cards
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      if (entry.target.classList.contains('item')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInRight');
      }

      if (entry.target.classList.contains('timeline')) {
        entry.target.classList.add('animate__animated', 'animate__zoomInDown');
      }

      if (entry.target.classList.contains('profilePic')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
      }

      if (entry.target.classList.contains('skillsLanguages') || entry.target.classList.contains('skillsCoding')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }

      if (entry.target.classList.contains('contactField')) {
        entry.target.classList.add('animate__animated', 'animate__flipInY', 'animate__delay-1s');
      }
      if (entry.target.classList.contains('contactFieldSmall')) {
        entry.target.classList.add('animate__animated', 'animate__flipInY', 'animate__delay-1s');
      }
      if (entry.target.classList.contains('portfolioLeft')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
      }
      if (entry.target.classList.contains('portfolioRight')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInRight');
      }

    }
  });
});

// Tell the observer which elements to track
observer.observe(document.querySelector('#personal'));
observer.observe(document.querySelector('#interests'));
observer.observe(document.querySelector('#projects'));
observer.observe(document.querySelector('#timelineID1'));
observer.observe(document.querySelector('#timelineID2'));
observer.observe(document.querySelector('#profilePicID'));
observer.observe(document.querySelector('#skillsCodingID'));
observer.observe(document.querySelector('#skillsLanguagesID'));
observer.observe(document.querySelector('#teamsField'));
observer.observe(document.querySelector('#outlookField'));
observer.observe(document.querySelector('#intranetField'));
observer.observe(document.querySelector('#portfolioCard1'));
observer.observe(document.querySelector('#portfolioCard2'));
observer.observe(document.querySelector('#portfolioCard3'));
observer.observe(document.querySelector('#portfolioCard4'));
observer.observe(document.querySelector('#githubField'));
observer.observe(document.querySelector('#discordField'));
observer.observe(document.querySelector('#instaField'));
observer.observe(document.querySelector('#linkedinField'));



function titleClick() {
  document.getElementById("element").classList.add('animate__animated', 'animate__shakeX');
}

document.getElementById("element").addEventListener('animationend', () => {
  document.getElementById("element").classList.remove('animate__animated', 'animate__shakeX');

});
