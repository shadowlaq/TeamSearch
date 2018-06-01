

var endDate = 2018;
var startDate = 1950;
var searchTerm = "";
var limit = 5;


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


$("#run-search").on("click", function () {
  event.preventDefault()

  searchTerm = $("#search-term").val();
  endDate = $("#end-year").val();
  startDate = $("#start-year").val();
  
  url += '?' + $.param({
    'api-key': "5115fd11c5e742edbc9ee568082b3c4a",
    'q': searchTerm,
    'begin_date': startDate + "0101", //optional
    'end_date': endDate + "0101",      //optional
    'page': limit
  });
  $.ajax({
    url: url,
    method: 'GET',
  })
  .then(function (result) {
    for(var i = 0; i<limit;i++){

      $("#article-section").append("<h1>"+result.response.docs[i].snippet+"</h1>");
      console.log(result.response.docs[i].snippet);

    }
    console.log(result);

  });

});