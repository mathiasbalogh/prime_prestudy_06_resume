
jQuery(document).ready(function(){
  $(".duties").hide();
  $("button").on("click", function(){
   $(".duties").slideToggle();
 });
});
