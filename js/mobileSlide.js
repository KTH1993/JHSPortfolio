$(function () {
  $(".pofomobile .swiper_wrapper").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    speed: 500,
    vertical: true,
    autoplay: true,
    verticalSwiping: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
  });

  $(".pofomobile_box").hover(
    function () {
      $(this).css({ cursor: "pointer" });
    },
    function () {
      $(this).css({ cursor: "normal" });
    }
  );
});
