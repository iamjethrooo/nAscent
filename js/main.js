// Up button
$(document).ready(function () {
  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
});

const images = document.querySelectorAll(".service-image img");
const modalwrap = document.querySelector(".modal-wrap");
const modalcontent = document.querySelector(".modal-content");

images.forEach(image => {
  image.addEventListener('click', function() {
    modalcontent.style.backgroundImage = `url(${image.src})`;
    modalwrap.style.display = 'flex';
  });
});

modalwrap.addEventListener('click', function() {
  modalwrap.style.display = 'none';
});