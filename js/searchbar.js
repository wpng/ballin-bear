$(document).ready(function(){


	$('#small-search a').click(function(){
		$('#small-search a').addClass('notvisible');
    	$('#search-container').css('position','relative'); 
	    $('#search-container form').addClass('visible');
	    
	    //RESIZE
	    if ( $(window).width() <= 1107){
    		$('#session').addClass('notvisible');
        }
        
        // BODY CLICK
	    $('#search-container form').click(function(event) {
		    $('html').one('click',function() {
			    $('#small-search a').removeClass('notvisible');
			    $('#session').removeClass('notvisible');
			    $('#search-container').css('position','absolute');
			    $('#search-container form').removeClass('visible');
			});
		    event.stopPropagation();
		});
	});



});