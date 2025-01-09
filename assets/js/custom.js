
/* jQuery Pre loader
 -----------------------------------------------*/
$(window).on('load', function () {
  setTimeout(removeLoader, 750); //wait for page load PLUS one second.
});
function removeLoader() {
  $(".preloader").fadeOut(375, function () {
    // fadeOut complete. Remove the loading div
    $(".preloader").remove(); //makes page more lightweight 
  });
}


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function () {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  /* Back top
  -----------------------------------------------*/
  const showOnPx = 100;
  const backToTopButton = document.querySelector(".go-top")

  const scrollContainer = () => {
    return document.documentElement || document.body;
  };

  document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
      backToTopButton.classList.remove("hidden")
    } else {
      backToTopButton.classList.add("hidden")
    }
  })

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

});

