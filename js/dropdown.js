var Dropdown =
{
    init: function()
    {
        $( '.dropdown' ).on( 'click', Dropdown.show );
    },
    show: function( event )
    {
        event.stopPropagation();
        
        $( '.dropdown' ).removeClass( 'open' );
        $( this ).addClass( 'open' );
        
        $( 'body' ).one( 'click', Dropdown.hide );
    },
    hide: function( event )
    {
        event.stopPropagation();
        
        $( '.dropdown' ).removeClass( 'open' );
    }
};