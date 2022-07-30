// Up button
$(document).ready(function () {
  $("#up").on("click", function () {
    $(".wrapper").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  // AOS
  AOS.init({
    easing: "ease",
    duration: 1000,
    once: true, /* Animation only runs once */
  })

  document.querySelector('.wrapper').addEventListener('scroll', AOS.refresh);

  // AOS for mobile screens
  if (document.body.clientWidth < 992) {
    const serviceImageDiv = document.querySelectorAll(".service-image");
    const serviceDescriptionDiv = document.querySelectorAll(".service-description");
    serviceImageDiv.forEach(div => {
      div.setAttribute("data-aos", "slide-up");
    });
    serviceDescriptionDiv.forEach(div => {
      div.setAttribute("data-aos", "slide-down");
    })
  }

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
});

