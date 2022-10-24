// hide search icon and show search box on navbar
$("#search-icon").click(function () {
  $("#search-icon").css("display", "none");
  $("#search-box").css("display", "block");
});

$(".nav-link").click(function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});
