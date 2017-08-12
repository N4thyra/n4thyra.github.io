$('document').ready(()=> {
  const imageFooter = $('.portfolio-footer-image');
  if(window.innerWidth > 701) {
    if(!$('#nav-checkbox').is(':checked')) {
      $('#nav-checkbox').attr('checked', true);
    }
  }

  function checkWidth() {
    if(window.innerWidth > 701) {
      if(!$('#nav-checkbox').is(':checked')) {
        $('#nav-checkbox').attr('checked', true);
      }
    } else {
      $('#nav-checkbox').attr('checked', false);
    }
  }

  function windowWidth() {
    if(window.innerWidth > 701) {
      if(!$('#nav-checkbox').is(':checked')) {
        $('#nav-checkbox').attr('checked', true);
      }
    }
  }

  $(window).resize(checkWidth);

  imageFooter.on('mouseenter', function() {
      $(this).effect('bounce');
    });
});
