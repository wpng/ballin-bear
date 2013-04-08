var Dropdown =
{
    init: function()
    {
        $( '#session .dropdown' ).on( 'click', Dropdown.show );
        $( '#dashboard .dropdown' ).on( 'click', Dropdown.dashboard );
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