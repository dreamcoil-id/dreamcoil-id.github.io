$(document).ready(function() {
  $('#dp').hide();
  $('#dp2').hide();

  $('#dpb').click(function() {
    $('#dp').show();
    $('#dpb').hide();
    $('#santai').addClass('disabled');
  });
  $('#dpb2').click(function() {
    $('#dp2').show();
    $('#dpb2').hide();
    $('#santai2').addClass('disabled');
  });

  $('#santai').click(function() {
    $('#dpb').addClass('disabled');
  });
  $('#santai2').click(function() {
    $(' #dpb2' ).addClass(' disabled' );
  });

  /** ******************************************
   * JS Services part
   ********************************************/


  /** ******************************************
   * JS About part
   ********************************************/

  $('.fade').hover(function() {
    $(this).find('.caption').fadeIn(250);
  }, function() {
    $(this).find('.caption').fadeOut(250);
  });

  /** ******************************************
   * JS Navigasi kiri part
   ********************************************/
  var $div = $('#home-check');
  var $div2 = $('#works-check');
  var $div3 = $('#services-check');
  var $div4 = $('#about-check');
  var $div5 = $('#contact-check');

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "class") {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        if ($('#home-check').hasClass('active')) {
          $('.dot-home').attr('src', 'assets/img/dot-selected.png');
        }
        if ($('#works-check').hasClass('active')) {
          $('.dot-works').attr('src', 'assets/img/dot-selected.png');
        }
        if ($('#services-check').hasClass('active')) {
          $('.dot-services').attr('src', 'assets/img/dot-selected.png');
        }
        if ($('#about-check').hasClass('active')) {
          $('.dot-about').attr('src', 'assets/img/dot-selected.png');
        }
        if ($('#contact-check').hasClass('active')) {
          $('.dot-contact').attr('src', 'assets/img/dot-selected.png');
        }

        if (!$('#home-check').hasClass('active')) {
          $('.dot-home').attr('src', 'assets/img/dot-normal.png');
        }
        if (!$('#works-check').hasClass('active')) {
          $('.dot-works').attr('src', 'assets/img/dot-normal.png');
        }
        if (!$('#services-check').hasClass('active')) {
          $('.dot-services').attr('src', 'assets/img/dot-normal.png');
        }
        if (!$('#about-check').hasClass('active')) {
          $('.dot-about').attr('src', 'assets/img/dot-normal.png');
        }
        if (!$('#contact-check').hasClass('active')) {
          $('.dot-contact').attr('src', 'assets/img/dot-normal.png');
        }
      }
    });
  });

  observer.observe($div[0], {
    attributes: true,
  });
  observer.observe($div2[0], {
    attributes: true,
  });
  observer.observe($div3[0], {
    attributes: true,
  });
  observer.observe($div4[0], {
    attributes: true,
  });
  observer.observe($div5[0], {
    attributes: true,
  });

  var figure = $('.services-content').hover(function(){
    $('video', this).get(0).play();
    $(this).find('.services-video-overlay').css('opacity', '0.1');
    $(this).find('.services-texts').css('display', 'block');
  }, function() {
    $('video', this).get(0).pause();
    $(this).find('.services-video-overlay').css('opacity', '0.6');
    $(this).find('.services-texts').css('display', 'none');
  } );
});

(function() {
  /**
   * Video element
   * @type {HTMLElement}
   */
  var video = document.getElementById("video-main-banner");

  video.addEventListener('canplay', function() {
    this.play();
  });
})();
