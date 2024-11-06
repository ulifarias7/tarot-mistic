$(document).ready(function () {
  $(".testimonial-slider").slick({
    dots: false,
    arrows: true, // Mantén las flechas activadas para escritorio
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true, // Habilita el deslizamiento
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Centra el carrusel en móvil
          arrows: false, // Desactiva las flechas en móviles
          infinite: true,
          swipe: true, // Habilita el swipe en móvil
        },
      },
    ],
  });
});
