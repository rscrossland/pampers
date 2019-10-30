$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
				
				
			 $('.menu-collapsed').click( function() {
    $(".hamburger").toggleClass("is-active");
} );
	
				
				$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});
		
		
		 $('.hamburger').click( function() {
    $(".menu-collapsed").toggleClass("menu-expanded");
} );
				
				
			 $('.hamburger').click( function() {
    $(".svglogo").toggleClass("svglogoactive");
} );
				
	$(".menu-collapsed").click(function() {
  $(".svglogo").toggleClass("svglogoactive");
});			
				
				
});