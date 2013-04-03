var App =
{
    init: function()
    {
        if ( typeof Dropdown != 'undefined' )
            Dropdown.init();
        
        Dashboard.init();
    }
};

var Dashboard =
{
    init: function()
    {
        $( '#dashboard-toggle' ).on( 'click', Dashboard.stateChange );
    },
    stateChange: function( event )
    {
        if ( $( '#dashboard' ).hasClass('open') )
        {
            $( '#dashboard' ).switchClass( "open", "closed", 300 );
        }
        else
        {
            $( '#dashboard' ).switchClass( "closed", "open", 300 );
        }
    }
};

$( document ).ready( App.init );