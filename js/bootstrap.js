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
    } 
};

var Dashboard =
{
    init: function()
    {
        $( '#dashboard-toggle' ).on( 'click', Dashboard.stateChange );
        
        if ( App.isMobile )
            $( '#dashboard' ).removeClass('open').addClass('closed');
    },
    stateChange: function( event )
    {
        if ( $( '#dashboard' ).hasClass('open') )
        {
            $( '#dashboard' ).removeClass('open').addClass('closed');
            //$( '#dashboard' ).switchClass( "open", "closed", 300 );
        }
        else
        {
            $( '#dashboard' ).removeClass('closed').addClass('open');
            //$( '#dashboard' ).switchClass( "closed", "open", 300 );
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
