var AffinityBot =
{
    affinityArc: [],
    affinityBg: [],
    init: function()
    {
        $('.affinity-bot').each( AffinityBot.set );
        
        $('.affinity-info').on( 'mouseover', AffinityBot.onHover );
        $( '.affinity-info .affinity-actions' ).on( 'mouseleave', AffinityBot.onOut );
        
        $(' .affinity-actions i ').on( 'mouseover', function( event ) {event.preventDefault();} );
    },
    set: function()
    {
        // Retrieve raw data
        var score = parseInt( $( this ).attr('data-score') );
        var size = parseInt( $( this ).attr('data-size') );
        var stroke = parseInt( $( this ).attr('data-stroke') );
        
        var id = parseInt( $( this ).attr('data-id') );
        
        if ( !id )
            id = Math.floor( Math.random() );
        
        var colorStroke = "#f68b2c";
        
        var colorFill = "#fdcca1";
        
        // Set affinity bot size
        var fullSize = size + stroke + 2;
        var midSize = size / 2;
        var radius = parseInt( fullSize / 2 );
        
        // Create affinity boat circle
        var affinityType = Raphael( $( this )[0], fullSize, fullSize );

        affinityType.customAttributes.arc = AffinityBot.arc;
        
        AffinityBot.affinityArc[id] = affinityType.path().attr( {"fill": "none", "stroke": colorStroke, "stroke-width": stroke, arc: [radius, radius, 0, 100, midSize]} );

        // Animate affinity boat circle
        var anim = Raphael.animation(  {arc: [radius, radius, score, 100, midSize]}, 1000, "linear" );

        AffinityBot.affinityArc[id].animate( anim.delay( 500 ) ); 

        // Create background circle
        var paper = Raphael( $( this )[0], fullSize, fullSize );
        AffinityBot.affinityBg[id] = paper.circle(radius, radius, midSize);
        AffinityBot.affinityBg[id].attr( {stroke: colorFill, "stroke-width": stroke} );
    },
    onHover: function( event )
    {
        event.preventDefault();
        
        var id = parseInt( $( '.affinity-bot', this ).attr('data-id') );
        
        if ( !$( this ).hasClass( 'active' ) && id)
        {
            $( this ).addClass( 'active' );

            // Retrieve raw data
            var score = parseInt( $( '.affinity-bot', this ).attr('data-score') );
            var size = parseInt( $( '.affinity-bot', this ).attr('data-size') );
            var stroke = parseInt( $( '.affinity-bot', this ).attr('data-stroke') );

            var colorStroke = "#00a9da";

            var colorFill = "#ccebf4";

            // Set affinity bot size
            var fullSize = size + stroke;
            var midSize = size / 2;
            var radius = parseInt( fullSize / 2 );

            AffinityBot.affinityArc[id].attr( {"fill": "none", "stroke": colorStroke, "stroke-width": stroke, arc: [radius, radius, 0, 100, midSize]} );

            // Animate affinity boat circle
            var anim = Raphael.animation(  {arc: [radius, radius, score, 100, midSize]}, 1000, "linear" );
            
            $( '.affinity-actions', this ).animate( { opacity: 1 }, 500 );
            AffinityBot.affinityArc[id].animate( anim.delay( 300 ) );
            AffinityBot.affinityBg[id].animate({stroke: colorFill}, 300);
        }
    },
    onOut: function( event )
    {   
        event.preventDefault();
        
        var parent = $( this ).parents( '.affinity-info' )[ 0 ];
        
        var id = parseInt( $( '.affinity-bot', parent ).attr('data-id') );
        
        if ( id )
        {   
            // Retrieve raw data
            var score = parseInt( $( '.affinity-bot', parent ).attr('data-score') );
            var size = parseInt( $( '.affinity-bot', parent ).attr('data-size') );
            var stroke = parseInt( $( '.affinity-bot', parent ).attr('data-stroke') );

            var colorStroke = "#f68b2c";
            var colorFill = "#fdcca1";

            // Set affinity bot size
            var fullSize = size + stroke;
            var midSize = size / 2;
            var radius = parseInt( fullSize / 2 );

            AffinityBot.affinityArc[id].attr( {"fill": "none", "stroke": colorStroke, "stroke-width": stroke, arc: [radius, radius, 0, 100, midSize]} );

            // Animate affinity boat circle
            var anim = Raphael.animation(  {arc: [radius, radius, score, 100, midSize]}, 1000, "linear" );
            
            $( '.affinity-actions', parent ).animate({opacity: 0}, 500, function()
            {
                $( parent ).removeClass( 'active' );
            });
            
            AffinityBot.affinityArc[id].animate( anim.delay( 300 ) );
            
            AffinityBot.affinityBg[id].animate({stroke: colorFill}, 300);
        }
    },
    arc: function(xloc, yloc, value, total, R)
    {
        var alpha = 360 / total * value,
            a = (90 - alpha) * Math.PI / 180,
            x = xloc + R * Math.cos(a),
            y = yloc - R * Math.sin(a),
            path;
        
        if (total == value)
        {
            path =
            [
                ["M", xloc, yloc - R],
                ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
            ];
        }
        else
        {
            path =
            [
                ["M", xloc, yloc - R],
                ["A", R, R, 0, +(alpha > 180), 1, x, y]
            ];
        }
        
        return {path: path};
    }
};

$( document ).ready( AffinityBot.init );