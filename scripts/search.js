// Create the Lunr index from the posts array in documents.js
// https://lunrjs.com/guides/getting_started.html#creating-an-index
var idx = lunr(function () {
  this.ref('id')
  this.field('url')
  this.field('title', { boost: 5 })
  this.field('artist', { boost: 5 })
  this.field('notes', { boost: 2 })
  this.field('work-year')

works.forEach(function (work) {
    this.add(work)
  }, this)
})

$(document).ready(function() {
  var noresults = $('#noresults');
  var resultdiv = $('#results');
  // Executes every time the user presses a key
  $('input#search').on('keyup', function () {
    // Hide the placeholder "no results" div and reomve any existing results
    noresults.hide();
    resultdiv.empty();
    var query = $(this).val();
    // Only run a query if the string contains at least three characters
    if (query.length > 2) {
      var results = idx.search(query);
      // Check if Lunr returned any results
      if (results.length > 0) {
        // Iterate through the results
        for (var item in results) {
          // Get the ID of the result
          var id = results[item].ref;
          // Use the ID to refer back to matching post in documents.js, and add
          // a link to the post to the results div
          resultdiv.append('<div class="pb4"><a href="' + works[id].url + '">' + works[id].title + '</a> – ' + works[id].artist +' </div>');
        }
      } else {
        noresults.show();
      }
    }
  });
});
