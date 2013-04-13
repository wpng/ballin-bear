var Modal =
{
    init: function()
    {
        $( '#close-modal-background-target, #modal-close' ).on( 'click', Modal.hide );
    },
    show: function()
    {
        $( '#modal-container' ).addClass( 'open' );
    },
    hide: function()
    {
        $( '#modal-container' ).removeClass( 'open' );
    }
}

$( document ).ready( Modal.init );