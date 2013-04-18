var News = 
{
    isChecked: false,
    init: function()
    {
        News.gallery();
        
        $( '#select-all-news' ).on( 'click', News.filter );
        
        $( 'input[type=checkbox]' ).on( 'click', News.checkCategory );
    },
    gallery: function()
    {
        var $container = $('#news');
   
        $container.imagesLoaded( function(){
          $container.masonry({
            itemSelector : '.actuality'
          });
        });
    },
    filter: function( event )
    {
        event.preventDefault();
        
        if ( News.isChecked )
        {
            $( '.actuality-filter input' ).prop('checked', false);
            $( '#select-all-news' ).text( 'Tout sélectionner');
            News.isChecked = false;
        }
        else
        {
            $( '.actuality-filter input' ).prop('checked', 'checked');
            $( '#select-all-news' ).text( 'Tout désélectionner');
            News.isChecked = true;
        }
    },
    checkCategory: function( event )
    {
        var parent = $( this ).parents( 'li' )[ 0 ];
        
        var test = $( 'input[type=checkbox]:first-child:checked', parent ).attr('name');
        
        console.log(test);
        
        if ( $( 'input[type=checkbox]:first-child:checked', parent ).attr('name') == $( 'input[type=checkbox]:first-child', parent ).attr('name') ) 
            $( 'ul input[type=checkbox]', parent ).prop('checked', 'checked');
        else
            $( 'ul input[type=checkbox]', parent ).prop('checked', false);
    }
};

$( document ).ready( News.init );