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
            console.log('uncheck');
            $( '.actuality-filter input' ).prop('checked', false);
            News.isChecked = false;
        }
        else
        {
            console.log('check');
            $( '.actuality-filter input' ).prop('checked', 'checked');
            News.isChecked = true;
        }
    }
};

$( document ).ready( News.init );