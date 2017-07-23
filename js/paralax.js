$(document).ready(function(){
	$window = $(window);
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $window.scroll(function() {
		if($window.scrollTop() > 4680){
            var yPos = -(($window.scrollTop()-5500) / $bgobj.data('speed'));
			var	sPos = 20;
            var coords = 'center '+ yPos + 'px';
      console.log(yPos);
      if(yPos >= -800 && yPos <= 650){
            $bgobj.css({ backgroundPosition: coords });
      }
			
		}
        });
    });
});