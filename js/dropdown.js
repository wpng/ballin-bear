var Dropdown =
{
    init: function()
    {
        $( '.dropdown h4, .dropdown h5, .dropdown h6' ).on( 'click', Dropdown.show );
    },
    show: function( event )
    {
        event.stopPropagation();
        
        $( '.dropdown' ).removeClass( 'open' );
        $( this ).parents('.dropdown:first').addClass( 'open' );
        
        $( 'body' ).one( 'click', Dropdown.hide );
    },
    hide: function( event )
    {
        event.stopPropagation();
        
        $( '.dropdown' ).removeClass( 'open' );
    }
};