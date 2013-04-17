var App =
{
    isMobile: false,
    init: function()
    {
        if ( $(window).width() <= 1024 )
            App.isMobile = true;
        
        if ( typeof Dropdown != 'undefined' )
            Dropdown.init();
        
        Dashboard.init();
        
        Slider.init();
        
        Form.title();
        
        $( '.user-action' ).bind( 'click', App.userAction );
    },
    userAction: function( event )
    {
        event.preventDefault();
    }
};

var Dashboard =
{
    init: function()
    {
        $( '#dashboard-toggle' ).on( 'click', Dashboard.stateChange );
        
        if ( App.isMobile )
            $( '#dashboard' ).removeClass('open', 300, "swing").addClass('closed', 300, "swing")
        
        $( window ).resize( Dashboard.onResize );
    },
    stateChange: function( event)
    {
        if ( $( '#dashboard' ).hasClass('open', 300, "swing") )
        {
            $( '#dashboard' ).removeClass('open', 300, "swing").addClass('closed', 300, "swing");
            $( '#dashboard .dropdown' ).removeClass( 'open', 300, "swing" );
            $('#dashboard .dropdown span,#dashboard .dropdown i:last-child').hide();
            //$( '#dashboard' ).switchClass( "open", "closed", 300 );
        }
        else
        {
            $( '#dashboard' ).removeClass('closed', 300, "swing").addClass('open', 300, "swing");
            setTimeout(function(){
            	$('#dashboard .dropdown span,#dashboard .dropdown i:last-child').show();
            },300);
            //$( '#dashboard' ).switchClass( "closed", "open", 300 );
        }
    },
    onResize: function( event )
    {
        if ( $(window).width() <= 1024 && $( '#dashboard').hasClass('open') ){
            $( '#dashboard' ).removeClass('open', 300, "swing").addClass('closed', 300, "swing");
            $('#dashboard .dropdown span,#dashboard .dropdown i:last-child').hide(0);
        }
        
        if ( $(window).width() >= 1024 && $( '#dashboard' ).hasClass('closed') ){
            $( '#dashboard' ).removeClass('closed', 300, "swing").addClass('open', 300, "swing");
            $('#dashboard .dropdown span,#dashboard .dropdown i:last-child').show();
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

var Form =
{
    title: function()
    {
        $('textarea[title], :input[title]').each(function()
        {
            var $this = $(this);
            if($this.val() === '')
            {
                $this.val($this.attr('title'));
            }
            $this.focus(function()
            {
                if($this.val() === $this.attr('title'))
                {
                    $this.val('');
                }
            });
            $this.blur(function()
            {
                if($this.val() === '')
                {
                    $this.val($this.attr('title'));
                }
            });
        });
    }
}

$( document ).ready( App.init );

// Custom Arc Attribute, position x&y, value portion of total, total value, Radius
