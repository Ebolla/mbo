$(function() {
  var start = moment().subtract(29, 'days');
  var end = moment();

  function cb(start, end) {
    $('#report-range .range').html(start.format('DD.MM.YYYY') + ' - ' + end.format('DD.MM.YYYY'));
  }

  $('#report-range').daterangepicker({}, cb);

  cb(start, end);



  $('[data-toggle="tooltip"]').tooltip();

  //init
  initRating($('.rating'), [4, 3, 1, 2], '18px', '35px');
  initRating($('.rating-small'), [4, 3, 1, 4, 3, 1, 2, 1, 3, 3, 3, 3, 3], '16px', '15px');


  //functions
  function initRating($sel, data, size, gap) {

    $sel.length !== 0 && $sel.each(function(i) {
      $(this).rateYo({
        rating : data[i],
        starWidth : size,
        spacing : gap,
        normalFill: '#e1e4e4',
        ratedFill: '#669de6',
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20">'+
        '<circle cx="10" cy="10" r="10"/>'+
        '</svg>'
      });
    });
  }
  
  $('.input-file').on('change', function (e) {
    var fileName = e.target.value.split( '\\' ).pop();
    var $name = $(this).next('.name');
    var $control = $(this).parents('.image-upload');
    var $progress = $(this).siblings('.progress');
    var $progressBar = $progress.children('.progress-bar');

    if (fileName.length) {
      $name.text(fileName);
      $control.addClass('active');
      $progress.show();
      $progressBar.animate({width: '100%'}, 1500);
    }

  });

  $('.level-item.undefined').on('click', function () {
    $('#addMembership').modal();
  });

  $('#create-membership').on('click', function () {
    var item = $('.level-item.undefined').get(0);
    $(item).removeClass('undefined').addClass('plus');
    $(item).children().show();
  });

  $('.selectpicker').selectpicker();

  $(".tooltip-holder").mouseover(function() {
    $(this).children(".custom-tooltip").addClass('visible');
  }).mouseout(function() {
    $(this).children(".custom-tooltip").removeClass('visible');
  });

  $('#cp2').colorpicker();
});