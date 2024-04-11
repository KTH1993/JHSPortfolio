$(function () {



  $("#PalWorld_box")
  .mouseenter(function () {
    $("#section02_PalWorld > li").stop().animate({ marginTop: "-4350px" }, 22000);
  })
  .mouseleave(function () {
    $("#section02_PalWorld > li").stop().animate({ marginTop: "0px" }, 3000);
  });


  // 포케디펜스 
  $("#PokeDefense_box")
    .mouseenter(function () {
      $("#section03_PokeDefense > li").stop().animate({ marginTop: "-4350px" }, 22000);
    })
    .mouseleave(function () {
      $("#section03_PokeDefense > li").stop().animate({ marginTop: "0px" }, 3000);
    });


  // 커비


  // TF2

  $("#TF2_box")
  .mouseenter(function () {
    $("#section05_TF2 > li").stop().animate({ marginTop: "-550px" }, 5000);
  })
  .mouseleave(function () {
    $("#section05_TF2 > li").stop().animate({ marginTop: "0px" }, 3000);
  });


  //Calc


  $("#calc_box")
  .mouseenter(function () {
    $("#section06_calc > li").stop().animate({ marginTop: "-1400px" }, 7000);
  })
  .mouseleave(function () {
    $("#section06_calc > li").stop().animate({ marginTop: "0px" }, 3000);
  });

  $(".bhoverbox").hover(
    function () {
      $(this).css({ background: "rgba(0,0,0,0)" });
      $(this).find("i").show();
    },
    function () {
      $(this).css({ background: "rgba(0,0,0,0)" });
      $(this).find("i").hide();
    }
  );
});
