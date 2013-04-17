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
    	var n = 0;
    	console.log('passé dans la fonction search');
    
    	$('#session').toggleClass('notvisible');
    	console.log('session class toggled to visible');
    	$('#small-search a').toggleClass('notvisible'); 
	    $('#search').toggleClass('smallone');
	    $('#search-container form').toggleClass('visible');
	    
		    $("#search").mouseenter(function() {
			    n = 0;
			 }).mouseleave(function() {
				n = 1;
			 });
	
			 $("html").click(function(){ 
				 if (n == 1) {
					 $('#search-container form').toggleClass('visible');
					 $('#small-search a').toggleClass('notvisible');
					 $('#session').toggleClass('notvisible');
					 n = 2;
					 console.log('passé dans la fonction body');
				}
			});
		    
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