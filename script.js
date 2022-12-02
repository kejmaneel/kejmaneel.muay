$(document).ready(function () {
  $(".theme_icon").on("click", function () {
    $(".theme_icon").toggleClass("fa-sun");
    $(".theme_icon").toggleClass("fa-moon");

    let current_theme = $("html").attr("data-theme");

    if (current_theme == "dark") {
      $("html").attr("data-theme", "light");
    } else if (current_theme == "light") {
      $("html").attr("data-theme", "dark");
    }
  });
});

$(document).ready(function () {
  $(".fa-search").click(function () {
    $(".search-box").toggle();
    $("input[type='text']").focus();
  });
});

$(document).ready(function () {
  $("#search").click(function () {
    $(".search-box").toggle();
    $("input[type='text']").focus();
  });
});

// . แทน class , # แทน id => id จะอ่านแค่ตัวแรก ถ้ามี id ที่ชื่อซ้ำกัน
