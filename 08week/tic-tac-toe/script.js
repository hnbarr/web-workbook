'use strict';
//  how to switch turns WORKING!
$(document).ready(function() {
  var turn = 'X';
  var count = 0;
  $('[data-cell]').on('click',function(){
    if($(this).text()=== ''){
      $(this).text(turn);
      count++;
      checkForWin(count);
      if(turn === 'O'){
        turn = 'X';
      }else{
        turn = 'O';
      }
    }
  })

// tie WORKING!
  function checkForWin(tie){
    if(tie === 9){
       $('#announce-winner').text(`Try again`);
    }
// if theres a win at all... WORKING!
    if($('[data-cell="0"]').text()===turn &&
    $('[data-cell="1"]').text()===turn &&
    $('[data-cell="2"]').text()===turn){
    $('#announce-winner').text(`${turn} wins`);
  }
    if($('[data-cell="3"]').text()===turn &&
    $('[data-cell="4"]').text()===turn &&
    $('[data-cell="5"]').text()===turn){
    $('#announce-winner').text(`${turn} wins`);
  }
    if($('[data-cell="6"]').text()===turn &&
    $('[data-cell="7"]').text()===turn &&
    $('[data-cell="8"]').text()===turn){
    $('#announce-winner').text(`${turn} wins`);
  }
    if($('[data-cell="0"]').text()===turn &&
    $('[data-cell="3"]').text()===turn &&
    $('[data-cell="6"]').text()===turn){
    $('#announce-winner').text(`${turn} wins`);
  }
    if($('[data-cell="1"]').text()===turn &&
    $('[data-cell="4"]').text()===turn &&
    $('[data-cell="7"]').text()===turn){
    $('#announce-winner').text(`${turn} wins`);
  }
    if($('[data-cell="2"]').text()===turn &&
    $('[data-cell="5"]').text()===turn &&
    $('[data-cell="8"]').text()===turn){
    $('#announce-winner').text(`${turn} wins`);
  }
    if($('[data-cell="0"]').text()===turn &&
    $('[data-cell="4"]').text()===turn &&
    $('[data-cell="8"]').text()===turn){
    $('#announce-winner').text(`${turn} wins`);
  }
    if($('[data-cell="2"]').text()===turn &&
    $('[data-cell="4"]').text()===turn &&
    $('[data-cell="6"]').text()===turn){
    $('#announce-winner').text(`${turn} wins`);
  }
  }
  $('#clear').click (function(){
    location.reload();
  });
});