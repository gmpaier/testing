function getTmdb (){
    var key = "537dc0254ee4eb9747eecc6e3667403f";
    var title = $("#movie-input").val();
    title = title.trim();
    var requestUrl = "https://api.themoviedb.org/3/search/multi?api_key=" + key + "&language=en-US&query=" + title + "&page=1&include_adult=false";

    fetch(requestUrl)
      .then(function (response) {
        if (response.status !== 200){
            alert("invalid address");
        }
        return response.json();
      })
      .then(function (data) {
          console.log(data);
      
          return data;
      })
}   

function getMovie (){
    var key = "537dc0254ee4eb9747eecc6e3667403f";
    var id = $("#movie-input").val();
    id = id.trim();
    var requestUrl = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + key + "&language=en-US";
    fetch(requestUrl)
      .then(function (response) {
        if (response.status !== 200){
            alert("invalid address");
        }
        return response.json();
      })
      .then(function (data) {
          console.log(data);
      
          return data;
      })
}   

function getMusic (){
    let username = '45fedfc90645312f1e72dc6c4b3599f6';
    let password = '061af8389fe5144f24a14cc18c2fdd52';
    let authString = `${username}:${password}`
    var id = $("#movie-input").val();
    id = id.trim();
    var requestUrl = "https://45fedfc9.api.tunefind.com/api/v2/movie/" + id + "?id-type=tmdb";
    fetch("https://45fedfc9.api.tunefind.com/api/v2/show/alias", {
        headers: {
          Authorization: "Basic NDVmZWRmYzkwNjQ1MzEyZjFlNzJkYzZjNGIzNTk5ZjY6MDYxYWY4Mzg5ZmU1MTQ0ZjI0YTE0Y2MxOGMyZmRkNTI=",
          'Access-Control-Allow-Origin': "https://gmpaier.github.io/testing/CORS-test/"
        }
      })
    .then(function (response) {
        if (response.status !== 200){
            alert("invalid address");
        }

        return response.json();
    })
      .then(function (data) {
          console.log(data);
      
          return data;
      })
}   

$("#search-btn").on("click", getTmdb);
$("#id-btn").on("click", getMovie);
$("#music-btn").on("click", getMusic);
//{method: 'GET', headers: headers}