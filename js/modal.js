var Modal =
{
    init: function()
    {
        $( '.close-modal-background-target, .modal-close' ).on( 'click', Modal.hide );
        
        $( ".advice-expert" ).accordion( {header: "> div > h3", collapsible: true, icons: null} );
        
        if ( App.isMobile )
            Slider.init();
    },
    show: function( event )
    {
        event.preventDefault();
        
        $( '.modal-container' ).addClass( 'open' );
    },
    hide: function()
    {
        var parent = $( this ).parents( '.modal-container' )[0];
        
        $( parent ).removeClass( 'open' );
    }
}

var Slider =
{
    slidePos: 0,
    posCurrent: 0,
    posStart: 0,
    isMoving: false,
    isSliding: false,
    init: function()
    {
        $( '#modal-avantages .avantages-slider' )
            .bind( "mousemove", Slider.onMove )
            .bind( "touchmove", Slider.onMove )
            .bind( "mousedown", Slider.onMoveStart )
            .bind( "touchstart" , Slider.onMoveStart )
            .bind( "mouseup", Slider.onMoveEnd)
            .bind( "touchend" , Slider.onMoveEnd);
    },
    slide: function()
    {
        if ( !Slider.isSliding && ( Slider.slidePos > -1728 ) )
        {
            Slider.isMoving = false;
            Slider.isSliding = true;

            Slider.slidePos -= 288;

            $( '#modal-avantages .slider-inner' ).animate( {marginLeft : Slider.slidePos + 'px'}, "slow", function(){
                Slider.isSliding = false;
            });
        }
    },
    onMove: function( event )
    {
        // event web
        Slider.posCurrent = event.pageX;
        
        // event mobile
        //Slider.posCurrent = event.originalEvent.touches[0].pageX;

        if ( Slider.isMoving && ( ( Slider.posStart - Slider.posCurrent ) >= 60 ) )
            Slider.slide();
        
    },
    onMoveStart: function( event )
    {
        Slider.isMoving = true;
        
        // event desktop
        Slider.posStart = event.pageX;
        
        // event mobile
        // Slider.posStart = event.originalEvent.touches[0].pageX;
    },
    onMoveEnd: function( event )
    {
        Slider.isMoving = false;
        Slider.posCurrent = 0;
        Slider.posStart = 0;
    }
}

$( document ).ready( Modal.init );