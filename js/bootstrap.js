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
        
        Toggle.init();
        
        $( '.affinity-action, .user-action' ).bind( 'click', App.userAction );
        
        $( '#delete-account .user-action' ).on( 'click', App.showDelete );
        
        $( '#interests-account h3' ).on( 'click', App.showParams );
        
        if ( App.isMobile )
        {
            $( '#did-you-know h3, #advice h3, #news .actuality-filter h2, #global-explain h1' ).on( 'touchstart', App.showDetails );
            $( '#did-you-know h3, #advice h3, #news .actuality-filter h2, #global-explain h1' ).on( 'click', App.showDetails );
            
            $( '#summary h2').on( 'click', App.switchViewMobile );
            $( '#summary h2').on( 'touchstart', App.switchViewMobile );
            
            $( '#interests-account li' ).removeClass( 'active' );
        }
        
        
    },
    userAction: function( event )
    {
        event.preventDefault();
        
        $( '.user-action, .affinity-action' ).removeClass( 'active' );
        
        if ( $( this ).hasClass( 'active' ) )
            $( this ).removeClass( 'active' );
        else
            $( this ).addClass( 'active' );
    },
    showDelete: function( event )
    {
        if ( $( '#masked-delete' ).hasClass( 'open' ) )
            $( '#masked-delete' ).removeClass( 'open' )
        else
            $( '#masked-delete' ).addClass( 'open' )
    },
    showDetails: function( event )
    {   
        var parent = $( this ).parents( 'div' )[ 0 ];
        
        $( 'blockquote, a, ul, i, p, h3, form' , parent ).show();
        
        var $container = $('#news');
   
        $container.imagesLoaded( function(){
          $container.masonry({
            itemSelector : '.actuality'
          });
        });
    },
    switchViewMobile: function ( event )
    {
        var parent = $( this ).parents( '.module' )[ 0 ];
        
        if ( $( parent ).hasClass('active') )
            $( parent ).removeClass( 'active' );
        else
            $( parent ).addClass( 'active' );
    },
    showParams: function( event )
    {
        var parent = $( this ).parents( 'li' )[ 0 ];
        
        if ( $( parent ).hasClass('active') )
            $( parent ).removeClass( 'active' );
        else
            $( parent ).addClass( 'active' );
    }
};

var Dashboard =
{
    init: function()
    {
        $( '#dashboard-toggle' ).on( 'click', Dashboard.stateChange );
        
        if ( App.isMobile )
            $( '#dashboard' ).removeClass('open').addClass('closed');
        
        $( window ).resize( Dashboard.onResize );
    },
    stateChange: function( event )
    {
        if ( $( '#dashboard' ).hasClass('open') )
        {
            $( '#dashboard' ).removeClass('open').addClass('closed');
            $( '#dashboard .dropdown' ).removeClass( 'open' );
            //$( '#dashboard' ).switchClass( "open", "closed", 300 );
        }
        else
        {
            $( '#dashboard' ).removeClass('closed').addClass('open');
            //$( '#dashboard' ).switchClass( "closed", "open", 300 );
        }
    },
    onResize: function( event )
    {   
        if ( ( $(window).width() > 820 ) && ( $(window).width() <= 1024 ) && $( '#dashboard' ).hasClass('open') )
            $( '#dashboard' ).removeClass('open').addClass('closed');
        
        if ( $(window).width() >= 1024 && $( '#dashboard' ).hasClass('closed') )
            $( '#dashboard' ).removeClass('closed').addClass('open');
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

var Toggle =
{
    init: function()
    {
        $( '.toggle' ).on( 'click', Toggle.onClick );
    },
    onClick: function()
    {
        console.log('toggle');
        
        var parent = $( this ).parents( 'div' )[ 0 ];
        
        if ( $( parent ).hasClass( 'on' ) )
        {
            $( this ).animate( {'text-indent': "-29px"},
            {
                step: function(now, fx)
                {
                    $(fx.elem).css("background-position", now+"px 0px");
                },
                complete: function()
                {
                    $( parent ).removeClass( 'on' );
                }
            }, 1000 );
        }
        else
        {
            $( this ).animate( {'text-indent': "0px"},
            {
                step: function(now, fx)
                {
                    $(fx.elem).css("background-position", now+"px 0px");
                },
                complete: function()
                {
                    $( parent ).addClass( 'on' );
                }
            }, 1000 );
        }
    }
}

$( document ).ready( App.init );