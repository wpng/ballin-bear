$( document ).ready( function()
{
    var $container = $('#wishlist');
   
    $container.imagesLoaded( function(){
      $container.masonry({
        itemSelector : '.wished-product'
      });
    });
});