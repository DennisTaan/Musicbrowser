// hämtar data från apiet med en get funktion och lägger det i en parameter med namnet"data"
function getMovies() {
  $.get("https://swapi.dev/api/films", function (data) {
    $(data.results).each(function (i, data) {
      // loopar datan med en each looop
      //lagrar datan  med title, beskrivning och regissör i elementent "content"
      // och länkar sedan till en detailM sida och spara url
      console.log("sadsa");
      $(".content").append(
        `
                <div class='content1 border m-3 p-3'>
                <h3 class="title">
                <a class="info_link text-white" alt="More information about the movie" href="detailM.html?url=${data.url}" onclick="Store('${data.url}')" >${data.title}</a>           
                </h3> 
                <p class="font-italic text-white"> ${data.opening_crawl}</p>
                <p class="text-white"><b>Director</b>: ${data.director} <p>
                </div>
                `
      );
    });
  });
}

getMovies();

// gör en funktionen som  lagrar urlen för att sedan kunna komma åt urlen på en annan sida
function Store(url) {
  localStorage.setItem("url", url);
}

$("#search").keyup(function () {
  // sök text
  var text = $(this).val().toLowerCase();

  //Gömmer alla content1 element
  $(".content1").hide();

  // loopar  och skapar en funktionen som gör så att bokstäverna i sökfunktionen blir case-insensitive
  $(".content1 .title").each(function () {
    if (
      $(this)
        .text()
        .toLowerCase()
        .indexOf("" + text + "") != -1
    ) {
      $(this).closest(".content1").show();
    }
  });
});
