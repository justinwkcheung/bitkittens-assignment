function catsSubmit() {

  $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET'

  }).done(function(data) {
    var catsJSON = data.cats
    for (var i = 0; i < catsJSON.length; i++) {
    console.log(catsJSON[i].photo);
    var catsID = catsJSON[i].photo
    $('<img>').attr({'src': catsID, 'alt': "Photo of " + catsJSON[i].name}).appendTo('#cat' + (i+1));
   };
  });
};

$(document).ready(function() {


$('.summon-cats').on('click', catsSubmit);

});
