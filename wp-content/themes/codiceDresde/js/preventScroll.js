 
function preventScroll(){
	$('body').css('overflow', 'hidden');
	$('body').css('height', '100%');

	$('html').css('overflow', 'hidden');
	$('html').css('height', '100%');


	/*$('body').bind('touchmove', function(e){
		e.preventDefault();
	});*/
	


	
}


function EnableScroll(){

	/*$('body').css('overflow', 'auto');
    $('body').unbind('touchmove');*/ 

    $('body').css('overflow', 'visible');
	$('body').css('height', '100%');

	$('html').css('overflow', 'visible');
	$('html').css('height', '100%');


}