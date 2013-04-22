var Dropdown =
{
    init: function()
    {
        $( '#session .dropdown' ).on( 'click', Dropdown.show );
        $( '#dashboard .dropdown' ).on( 'click', Dropdown.dashboard );
        $( '#filtered-products .geoloc-action' ).bind( 'click', Dropdown.geolocProducts );
        $( '#filtered-products .offer-action' ).bind( 'click', Dropdown.offerProducts );
        
        $( '.geoloc-products .dropdown' ).bind( 'click', Dropdown.geolocMap );
        
		// insta search behaviour
        $( '#search input').focus( Dropdown.searchShow );
       	$( '#search input').focusout( Dropdown.searchHide );

		// small search behaviour
		$('#small-search a').on('click',Dropdown.search);
    },
	search: function()
    {    		   
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


    },
    searchShow: function ( event )
    {
        $( '#search-container' ).addClass( 'open' );
    },
    searchHide: function ( event )
    {
        $( '#search-container' ).removeClass( 'open' );
    },
    show: function( event )
    {
        event.stopPropagation();
        
        $( '#session .dropdown' ).removeClass( 'open' );
        $( this ).addClass( 'open' );
        
        $( 'body' ).one( 'click', Dropdown.hide );
    },
    hide: function( event )
    {
        event.stopPropagation();
        
        $( '#session .dropdown' ).removeClass( 'open' );
    },
    dashboard: function( event )
    {
        event.stopPropagation();
        
        var level = $( this ).attr('data-level');
        
        var reload = false;
        
        if ( $( this ).hasClass( 'open' ) )
            reload = true;
        
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
        
        if ( !reload )
            $( this ).addClass( 'open' );

        if ($('#dashboard').hasClass('closed'))
            $('#dashboard').removeClass('closed').addClass('open')
    },
    geolocProducts: function( event )
    {
        event.preventDefault();
        
        $( '#filtered-products .dropdown' ).removeClass( 'open offer' );
        
        $( this ).parents( '.dropdown:first' ).addClass( 'open geoloc' );
    },
    offerProducts: function( event )
    {
        event.preventDefault();
        
        $( '#filtered-products .dropdown' ).removeClass( 'open geoloc' );
        
        $( this ).parents( '.dropdown:first' ).addClass( 'open offer' );
    },
    geolocMap: function( event )
    {
        event.preventDefault();
        
        $( '.geoloc-products .dropdown' ).removeClass( 'open' );
        
        $( this ).addClass( 'open' );
    }
};