// Hamburger menu
$(document).ready(function () {
  console.log("hehehhe");
    $("#up").on("click", function () {
        console.log("Hello!")
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        2000
      );
    });
  });