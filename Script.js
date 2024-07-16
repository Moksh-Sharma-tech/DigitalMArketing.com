// script.js
$(document).ready(function () {
  var currentIndex = 0;
  var images = $(".Img .g");
  var totalImages = images.length;
  var intervalTime = 3000; // Time in milliseconds

  // Create dots
  for (var i = 0; i < totalImages; i++) {
    $(".dots").append('<span class="dot"></span>');
  }

  function showImage(index) {
    var newMarginLeft = -index * (images[0].width + 50); // 50px is the gap
    $(".Img").css("transform", "translateX(" + newMarginLeft + "px)");
    updateDots(index);
  }

  function updateDots(index) {
    $(".dot").removeClass("active");
    $(".dot").eq(index).addClass("active");
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  var sliderInterval = setInterval(nextImage, intervalTime);

  // Dot click event
  $(".dot").click(function () {
    var dotIndex = $(this).index();
    currentIndex = dotIndex;
    showImage(currentIndex);
    clearInterval(sliderInterval); // Stop auto sliding on dot click
    sliderInterval = setInterval(nextImage, intervalTime); // Restart auto sliding
  });

  // Initialize the first dot as active
  updateDots(currentIndex);
  var img = $("#img");
  var img2 = $("#img2");
  var img3 = $("#img3");

  $(".c1").click(function () {
    img2.hide();
    img.show(); // Hide the second image
    // Show the first image
    img.attr("src", "Images/Strategy and Quaity.jpeg");
    img.attr("alt", "Strategy and Quaity");
  });

  $(".c2").click(function () {
    img.hide();
    img.show(); // Hide the first image
    // Show the second image
    img2.attr("src", "Images/Honesty.jpeg");
    img2.attr("alt", "Honesty");
    img2.show();
  });
  $(".c3").click(function () {
    img.hide();
    img.show(); // Hide the first image
    // Show the second image
    img2.attr("src", "Images/Loyalty.jpeg");
    img2.attr("alt", "Loyalty");
    img2.show();
  });
  var $popup = $("#popupForm");
  var $button = $("#b");
  var $close = $(".close");

  $button.on("click", function () {
    $popup.fadeIn();
  });

  $close.on("click", function () {
    $popup.fadeOut();
  });

  $(window).on("click", function (event) {
    if ($(event.target).is($popup)) {
      $popup.fadeOut();
    }
  });
});
