var $board = $('#board');
var $cback = $('.cback');
var $cfront = $('.cfront');
var $clicked = $('.clicked');
var $card = $('.card');
var c = 0;
var x = 0;
var card = $('<div class="card"><div class="cfront"></div><div class="cback"></div></div>');
var imgs = ["http://puppstheories.com/spriterips/CaptAmericaEagle16f.gif","http://puppstheories.com/spriterips/CaptAmer_hideface_8f.gif","http://puppstheories.com/spriterips/captain-sheildpose_10f.gif","http://puppstheories.com/spriterips/CaptAmer_Star_4.gif","http://puppstheories.com/spriterips/CharlieStance4f.gif","http://puppstheories.com/spriterips/blanka_eatfruit_32f.gif","http://puppstheories.com/spriterips/AkumaStance4f.gif","http://puppstheories.com/spriterips/Colossus_stance_33f.gif"];

function shuffle (array) {
  var i = 0
  var j = 0;
  var temp;
  for (i = array.length -1; i > 0; i --) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

while (x<2){
  for (i = 0; i < imgs.length ;i++){
  card.clone().css({'background-image': 'url("'+imgs[i]+'")', 'box-shadow':'-7px -7px 6px #777', 'border': '2px solid white'}).appendTo($board);
  }
  x++;
  shuffle(imgs);
}

$('.card').on('click', function(){
  c ++
  if (c == 3){
      $(this).parent().find('.cback').removeClass('clicked');
      c = 1;
    }
  $(this).find('.cback').toggleClass('clicked');

})
