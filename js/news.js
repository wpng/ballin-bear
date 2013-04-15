var News = 
{
    isChecked: false,
    init: function()
    {
        News.gallery();
        
        $( '#select-all-news' ).on( 'click', News.filter );
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
    }
};

$( document ).ready( News.init );