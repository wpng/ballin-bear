var Dropdown =
{
    init: function()
    {   
    	
    	$('#session .dropdown').on('click', Dropdown.toggle);
	    $( '#dashboard .dropdown').on( 'click', Dropdown.dashboard );
	    $('#small-search a').on('click',Dropdown.search);

    },
    // Small-search bar toggling 
    search: function()
    {    		   
    	if ( $(window).width() <= 1107)
    		$('#session').addClass('notvisible');
    	$('#small-search a').toggleClass('notvisible');
    	$('#search-container').css('position','relative'); 
	    $('#search').toggleClass('smallone');
	    $('#search-container form').toggleClass('visible');
	    
		 		    
    },
    toggle: function(event)
    {		
		$(this).toggleClass('open');
		$( '#session .dropdown' ).not(this).removeClass( 'open' );
    },
    body: function(event)
    {
    	event.stopPropagation();
    	
    	console.log(this);
		$( '#session .dropdown.open' ).removeClass( 'open' );  
    },
    
    
    
    
    dashboard: function( event )
    {
        event.stopPropagation();
        
        var level = $( this ).attr('data-level');
        
        switch( level )
        {
            case '1':
                $('.dropdown[data-level=1], .dropdown[data-level=2], .dropdown[data-level=3]').removeClass( 'open' );
                break;
            case '2':
                $('.dropdown[data-level=2], .dropdown[data-level=3]').removeClass( 'open' );
                break;
            case '3':
                $('.dropdown[data-level=3]').removeClass( 'open' );
                break;
        }
        
        $( this ).addClass( 'open' );
    }
};