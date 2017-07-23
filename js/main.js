$(document).ready(function(){
	$('.about-smooth').smoothScroll({offset: -70,speed: 1250});
	$('.behaviors-smooth').smoothScroll({offset: -70,speed: 1250});
	$('.foru-smooth').smoothScroll({offset: -70,speed: 1250});
	$('.up-smooth').smoothScroll({offset: -70,speed: 1250});
	$('.main-form').smoothScroll({offset: -70,speed: 1250});
	$('.ipad-smooth').smoothScroll({offset: -300,speed: 1250});
	
    $('.flexslider').flexslider({
		animation: "fade",
		slideshowSpeed: 3500
    });
	
	$(".recall").click(function(e){
        e.preventDefault();
       $('#recall-popup').bPopup({
          closeClass:'close-btn'
       }); 
    });
	$(".order").click(function(e){
        e.preventDefault();
       $('#order-popup').bPopup({
          closeClass:'close-btn'
       }); 
    });
	
	function autoIframe(frame){ 
        try{ 
                innerDoc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document; 
                objToResize = (frame.style) ? frame.style : frame; 
                objToResize.height = innerDoc.body.scrollHeight + 10; 
                objToResize.width = innerDoc.body.scrollWidth + 10;  
 
        } 
        catch(err){ 
                alert(err.message); 
        } 
} 

});