
jQuery(document).ready(function(){
  $(".duties").hide();
  $("button").on("click", function(){
   $(".duties").slideToggle();
   if($('#arrow').css('height') === '40px'){
     $('#arrow').css('height', '275px');
   }else{
     $('#arrow').css('height', '40px');
   }
   if($('#arrow').css('height') === '275px'){
     $('#arrow').css('background-position','-7px 0');
   }else if ($('#arrow').css('height') === '40px'){
     $('#arrow').css('background-position', '-7px -225px');
   }
 });
});
