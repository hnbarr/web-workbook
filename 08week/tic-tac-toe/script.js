'use strict';

$(document).ready(function() {
  var turn = 'X';
  $('[data-cell]').on('click',function(){
    if($(this).text()=== ''){
      $(this).text(turn);
      checkForWin();
      if(turn === 'O'){
        turn = 'X';
      }else{
        turn = 'O';
      }
    }
  })

  function checkForWin(){
    if($('[data-cell="0"]').text()===turn &&
    $('[data-cell="1"]').text()===turn &&
    $('[data-cell="2"]').text()===turn){
    $('#announce-winner').text(`${turn} wins`);
  }
}
});
