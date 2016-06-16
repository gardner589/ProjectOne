// AM: We usually don't want to pollute the global name space. A good move here would be to encapsulate everything into a larger `game` object or wrap everything in a `$(document).ready()`.
var $board = $('#board');
var $cback = $('.cback');
var $clicked = $('.clicked');
// AM: I would rename `c` and `x` so that it's clear what the purpose of each variable is.
var c = 0;
var x = 0;
var card = $('<div class="card"><div class="cback"></div></div>');
var imgs = ["http://images.onesite.com/capcom-unity.com/user/jin_saotome//marvel_vs_capcom_animated_gifs/ce52b4811931bb41ac4c744d7266f292.gif?v=30800", "http://images.onesite.com/capcom-unity.com/user/jin_saotome//marvel_vs_capcom_animated_gifs/1990446303a9caa24455492235dea9b2.gif?v=23370", "http://puppstheories.com/spriterips/captain-sheildpose_10f.gif", "http://images.onesite.com/capcom-unity.com/user/jin_saotome//marvel_vs_capcom_animated_gifs/4dcc23df012e44d692badacf0f4f017d.gif?v=16303", "http://images.onesite.com/capcom-unity.com/user/jin_saotome//marvel_vs_capcom_animated_gifs/b011244e18fe1a5028102ad9afb2b7da.gif?v=11058", "http://puppstheories.com/spriterips/blanka_eatfruit_32f.gif", "http://puppstheories.com/spriterips/AkumaStance4f.gif", "http://images.onesite.com/capcom-unity.com/user/jin_saotome//marvel_vs_capcom_animated_gifs/76eefce777222f80ab627e7f013d4de6.gif?v=13986"];

function shuffle(array) {
    var i;
    var j;
    var temp;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}
// AM: I see that your "Reload" feature initiates a hard refresh of the page.
// AM: This is looking ahead, but perhaps you could encapsulate the below code in a function so that you can re-use it when the user wants to replay the game and not have to refresh the page.
while (x < 2) {
    shuffle(imgs);
    x++;
    for (i = 0; i < imgs.length; i++) {
        card.clone().css({
            'background-image': 'url("' + imgs[i] + '")',
            'box-shadow': '-7px -7px 6px #777',
            'border': '2px solid white'
        }).appendTo($board);
    }
}
var winr = 0;
var elem = [];
var last = [];
var idCheckr = [];
// AM: I know we talked about it IRL, but did you try implementing a click limiter variable so that it's not possible to flip more than two cards in a turn?
// AM: Imagine a `var cantClick = false` that is set to true after two cards are flipped. It's only set back to false once you're done comparing those two cards.
// AM: That means you would need to wrap a lot (if not all) of the code in the below event listener in an if statement along the lines of if(!cantClick){ ... }
// AM: Happy to go over this in person.
$('.card').on('click', function() {
  // AM: It might be useful to encapuslate some of the below code into functions so it's a bit more readable.
  // AM: You could separate those functions according to functionality/purpose.
    c++;
    if (($(this).attr('id','')) || !($(this).attr('id'))) {
        for (i = 0; i < 200; i++) {
            rand = Math.floor((Math.random() * i) + 1);
            $(this).attr('id', 'F' + rand)
            $(this).toggleClass('clicked')
        }
    }
    if (idCheckr[idCheckr.length - 1] == $(this).attr('id')) {
        $(this).children().toggleClass('clicked')
        $(this).children().removeClass('found')
        elem.pop()
    } else {
        idCheckr.push($(this).attr('id'))
    }
    console.log($(this).attr('id'))
    console.log(idCheckr)
    console.log(elem)

    var thisBG = $(this).css('background-image');
    var lastCard = last[last.length - 1];
    last.push(thisBG);
    elem.push($(this));
    $(this).children().toggleClass('clicked');
    if (elem.length == 2) {
        setTimeout(function() {
            elem[elem.length - 1].children().toggleClass('clicked');
            elem[elem.length - 2].children().toggleClass('clicked');
            console.log("ayy");
            elem = [];
            elem[elem.length-1].attr('id', undefined)
        }, 500)
        if (thisBG == lastCard) {
            elem[elem.length - 1].children().toggleClass('found');
            elem[elem.length - 2].children().toggleClass('found');
            c = 1;
            winr++;
        }
        if (winr == 8) {
            alert("YOU WIN!");
            $('h1').text("!GAME OVER! RESET? ->")
        };
    }
})
$('button').on('click', function() {
    document.location.reload()
})
$('.card').on('mouseover', function() {
    $(this).find('.cback').text('?')
})
$('.card').on('mouseout', function() {
    $(this).find('.cback').text('')
})

// AM: Kudos on keeping your code very DRY.
