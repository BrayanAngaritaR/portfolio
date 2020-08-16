(function($) {
   "use strict";
   let siteIstotope = function() {
      let $container = $('#portfolio-grid').isotope({
         itemSelector: '.item',
         isFitWidth: true
      });

      $(window).resize(function() {
         $container.isotope({
            columnWidth: '.col-sm-3'
         });
      });

      $container.isotope({
         filter: '*'
      });

      $('#filters').on('click', 'a', function(e) {
         e.preventDefault();
         let filterValue = $(this).attr('data-filter');
         $container.isotope({
            filter: filterValue
         });
         $('#filters a').removeClass('active');
         $(this).addClass('active');
      });
   }

   $(window).on('load', function() {
      siteIstotope();
   });

})(jQuery);