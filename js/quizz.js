var Quizz =
{
    init: function()
    {
        // price filters
        Quizz.setPriceFilter();
        
        // global filters
        Quizz.setFilters();
        
        $( '#details-expert' ).on( 'click', Modal.show );
    },
    setPriceFilter: function()
    {
        $( "#price-filter .filter" ).slider(
        {
            range: true,
            min: 0,
            max: 500,
            values: [ 75, 300 ],
            slide: function( event, ui )
            {
                var min = ui.values[ 0 ];
                var max = ui.values[ 1 ];

                $( "#price_min" ).val( min );
                $( "#price_max" ).val( max );

                $( "#price-filter .filter-callback" ).text( min + '€ à ' + max + '€' );
            }
        });

        var min = $( "#price-filter .filter" ).slider( "values", 0 );
        var max = $( "#price-filter .filter" ).slider( "values", 1 );

        $( "#price_min" ).val( min );
        $( "#price_max" ).val( max );

        $( "#price-filter .filter-callback" ).text( min + '€ à ' + max + '€' );
    },
    setFilters: function()
    {
        $( "#summary .filter" ).slider(
        {
            min: 0,
            max: 5,
            value: 3,
            orientation: "horizontal",
            range: "min",
            slide: function( event, ui )
            {
                var level = Quizz.getLevel( ui.value );
                
                $( 'input[type=hidden]', $(this).parents('div')[0] ).val( ui.value );
                $( '.filter-callback', $(this).parents('div')[0] ).text( level );
                
            }
        });
        
        $( "#summary .filter" ).each( function()
        {
            var value = $( this ).slider( "value" );
            var level = Quizz.getLevel( value );
            
            $( 'input[type=hidden]', $(this).parents('div')[0] ).val( value );
            $( '.filter-callback', $(this).parents('div')[0] ).text( level );
        });
        
        
    },
    getLevel: function( level )
    {
        switch( level )
        {
            case 0:
                return 'Pas du tout';
                break;
            case 1:
                return 'Rarement';
                break;
            case 2:
                return 'Souvent';
                break;
            case 3:
                return 'Important';
                break;
            case 4:
                return 'Très certainement';
                break;
            case 5:
                return 'Oui, absolument';
                break;
            default:
                return 'no';
                break;
        }
    }
};

$( document ).ready( Quizz.init );
