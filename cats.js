function catsSubmit() {

  $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET',

  }).done(function(data) {
    var catsJSON = data.cats
    var catsID = catsJSON[0].photo
    $('<img>').attr('src', catsID).attr('alt', "Photo of " + catsJSON[0].name).appendTo('#cat1')
    var catsID = catsJSON[1].photo
    $('<img>').attr('src', catsID).attr('alt', "Photo of " + catsJSON[1].name).appendTo('#cat2')
    var catsID = catsJSON[2].photo
    $('<img>').attr('src', catsID).attr('alt', "Photo of " + catsJSON[2].name).appendTo('#cat3')
  });
};

$(document).ready(function() {


$('.summon-cats').on('click', catsSubmit);

});
