$('document').ready(()=> {
  const imageFooter = $('.portfolio-footer-image');

imageFooter.on('mouseenter', function() {
    $(this).effect('bounce');
  });
});
