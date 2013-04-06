var App =
{
    init: function()
    {
        if ( typeof Dropdown != 'undefined' )
            Dropdown.init();
        
        Dashboard.init();
        
        Slider.init();
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

var Slider =
{
    init: function()
    {
        $( '.product-thumbnails img' ).on( 'click', Slider.switchPicture );
    },
    switchPicture: function()
    {
        var src = $( this ).attr('src');
        
        $( '.product-picture' ).attr( 'src', src );
    }
}

$( document ).ready( App.init );