var $board = $('#board');
var $cback = $('.cback');
var $clicked = $('.clicked');
var c = 0;
var x = 0;
var card = $('<div class="card"><div class="cback"></div></div>');
var imgs = ["http://puppstheories.com/spriterips/CaptAmericaEagle16f.gif","http://puppstheories.com/spriterips/CaptAmer_hideface_8f.gif","http://puppstheories.com/spriterips/captain-sheildpose_10f.gif","http://puppstheories.com/spriterips/CaptAmer_Star_4.gif","http://puppstheories.com/spriterips/CharlieStance4f.gif","http://puppstheories.com/spriterips/blanka_eatfruit_32f.gif","http://puppstheories.com/spriterips/AkumaStance4f.gif","http://puppstheories.com/spriterips/Colossus_stance_33f.gif"];

function shuffle (array) {
  var i;
  var j;
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
var elem = [];
var last = [];
$('.card').on('click', function(){
  c++;
  var thisBG = $(this).css('background-image');
  var lastCard = last[last.length-1];
  last.push(thisBG);
  elem.push($(this));
  $(this).children().addClass('clicked');
  if(elem.length == 2){
      setTimeout(function(){
        elem[elem.length-1].children().toggleClass('clicked');
        elem[elem.length-2].children().toggleClass('clicked');
        elem = [];
        console.log("ayy")
      }, 500);
      if (thisBG == lastCard) {
        elem[elem.length-1].children().toggleClass('found');
        elem[elem.length-2].children().toggleClass('found');
        c = 1;
      }
    }
})
$('button').on('click',function(){
  document.location.reload()
})
