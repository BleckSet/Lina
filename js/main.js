$(document).ready(function() {
    $(".switch_item").click(function() {
      $(".switch_item.active").removeClass("active");
      $(".choose.active").removeClass("active");
  
      $(this).addClass("active");
      $("#" + $(this).attr("id") + "-block").addClass("active");
    });
  });



  $(document).ready(function() {
    $(".pink_button").click(function() {
      $(".pink_button.active").removeClass("active");
      $(".choose.active").removeClass("active");
  
      $(this).addClass("active");
      $("#" + $(this).attr("id") + "-block").addClass("active");
    });
  });


  