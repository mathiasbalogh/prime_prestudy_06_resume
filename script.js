
$(document).ready(function(){
  $(".duties").hide();
  $('button').on('click', function(){
    $(this).closest("section").find(".duties").slideToggle();
    $(this).toggleClass("arrow");
  });
});
