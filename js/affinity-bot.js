var AffinityBot =
{
    init: function()
    {
        $('.affinity-bot').each( AffinityBot.set );
    },
    set: function()
    {
        // Retrieve raw data
        var score = parseInt( $( this ).attr('data-score') );
        var size = parseInt( $( this ).attr('data-size') );
        var stroke = parseInt( $( this ).attr('data-stroke') );
        
        // Set affinity bot size
        var fullSize = size + stroke;
        var midSize = size / 2;
        var radius = parseInt( fullSize / 2 );
        
        // Create affinity boat circle
        var affinityType = Raphael( $( this )[0], fullSize, fullSize );

        affinityType.customAttributes.arc = AffinityBot.arc;
        
        var affinityArc = affinityType.path().attr( {"fill": "none", "stroke": "#f68b2c", "stroke-width": stroke, arc: [radius, radius, 0, 100, midSize]} );

        // Animate affinity boat circle
        var anim = Raphael.animation(  {arc: [radius, radius, score, 100, midSize]}, 1000, "linear" );

        affinityArc.animate( anim.delay( 500 ) ); 

        // Create background circle
        var paper = Raphael( $( this )[0], fullSize, fullSize );
        var c = paper.circle(radius, radius, midSize);
        c.attr( {stroke: "#fdcca1", "stroke-width": stroke} );
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