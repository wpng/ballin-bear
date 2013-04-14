var Modal =
{
    init: function()
    {
        $( '.close-modal-background-target, .modal-close' ).on( 'click', Modal.hide );
        
        $( ".advice-expert" ).accordion( { header: "> div > h3", icons: null } )
        .sortable(
        {
            axis: "y",
            handle: "h3",
            stop: function( event, ui )
            {
                ui.item.children( "h3" ).triggerHandler( "focusout" );
            }
        });
    },
    show: function()
    {
        $( '.modal-container' ).addClass( 'open' );
    },
    hide: function()
    {
        var parent = $( this ).parents( '.modal-container' )[0];
        
        $( parent ).removeClass( 'open' );
    }
}

$( document ).ready( Modal.init );