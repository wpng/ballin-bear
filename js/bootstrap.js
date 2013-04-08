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
        
        /*********** TODO clean ***********/
        
        // SVG
        var archtype = Raphael("holder", 88, 88);
        
        archtype.customAttributes.arc = function (xloc, yloc, value, total, R) {
            var alpha = 360 / total * value,
                a = (90 - alpha) * Math.PI / 180,
                x = xloc + R * Math.cos(a),
                y = yloc - R * Math.sin(a),
                path;
            if (total == value) {
                path = [
                    ["M", xloc, yloc - R],
                    ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
                ];
            } else {
                path = [
                    ["M", xloc, yloc - R],
                    ["A", R, R, 0, +(alpha > 180), 1, x, y]
                ];
            }
            return {
                path: path
            };
        };

        // animate
        var my_arc = archtype.path().attr( {"fill": "none", "stroke": "#f68b2c", "stroke-width": 8, arc: [44, 44, 0, 100, 40]} );
        
        var anim = Raphael.animation(  {arc: [44, 44, 80, 100, 40]}, 1000, "linear" );
        
        my_arc.animate( anim.delay( 500 ) ); 
        
        // bg
        var paper = Raphael("holder", 88, 88);
        var c = paper.circle(44, 44, 40);
        c.attr( {stroke: "#fdcca1", "stroke-width": 8} );
        
        /*********** end clean ***********/
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
