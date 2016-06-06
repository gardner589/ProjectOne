var $board = $('#board');
var $cback = $('.cback');
var $cfront = $('.cfront');
var card = $('<div class="card"><div class="cfront"></div><div class="cback"></div></div>')
var imgs = ["http://puppstheories.com/spriterips/CaptAmericaEagle16f.gif","http://puppstheories.com/spriterips/CaptAmer_hideface_8f.gif","http://puppstheories.com/spriterips/captain-sheildpose_10f.gif","http://puppstheories.com/spriterips/CaptAmer_Star_4.gif","http://puppstheories.com/spriterips/CharlieStance4f.gif","http://puppstheories.com/spriterips/blanka_eatfruit_32f.gif","http://puppstheories.com/spriterips/AkumaStance4f.gif","http://puppstheories.com/spriterips/Colossus_stance_33f.gif"];


  for (i = 0; i < imgs.length-1 ;i++){
  //$("#board").add(card)
  card.clone().css({'background-image': 'url("'+imgs[i]+'")'}).appendTo($board);
  }



$('.card').on('click', function(){
    $(this).find('.cback').toggleClass('clicked');
    //$(this).find('.cfront').css("background-image","url('http://puppstheories.com/spriterips/cable_4f.gif')");
})
