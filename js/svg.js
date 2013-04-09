$(document).ready(function(){
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
});
