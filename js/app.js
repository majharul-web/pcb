// hide search icon and show search box on navbar
$("#search-icon").click(function () {
  $("#search-icon").css("display", "none");
  $("#search-box").css("display", "block");
});

$(".nav-link").click(function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

$(".do-slider").slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  fadeSpeed: 1000,
  dotsClass: "do-dots",
});

$(".work-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,

  dotsClass: "work-dots",
});
