

var storedhumanUrl = localStorage.getItem("urlFilm"); // använder getitem för att komma åt url från den detailS.js js filen


getDetail(storedhumanUrl);// lägger det i paremetern


function getDetail(storedhumanUrl) { // skapar en funktionen av url
    $.get(storedhumanUrl, function (item) {// hämtar url och skapar en function med ett namn på parametern
        //console.log(item);
        $(".content").append(`<p class="text-left p-1"><b>Name:</b> ${item.name}</p>`);// appendar namn till elmenten content
        $(".content").append(`<p class="text-left p-1"><b>Height:</b> ${item.height}</p>`);// appendar Height till elmenten content
        $(".content").append(`<p class="text-left p-1"><b>Mass:</b> ${item.mass}</p>`);// appendar mass till elmenten content
        $(".content").append(`<p class="text-left p-1"><b>Gender:</b> ${item.gender}</p>`);// appendar gender till elmenten content


 // Get Characters
            $.get(item.species, function (species) { // tar ut specifik data från item och gör en function
                //console.log(character);
                $(".content1").append(`<p class="text-left p-1"><b> Species name :</b> ${species.name}</p>`); //appendar species namn till elmenten content1



            });
            $(item.films).each(function (i, film) {// loopar item.films och gör en function
                $.get(film, function (films) {  // hämtar url och skapar en function med ett namn på parametern
                 // väljer elementent content1 och länkar sedan till detailM js fil med filmens url  och appendar filmens title
                    $(".content1").append(`
                    <p class="text-left p-1"><strong>Starred in:</strong>
                    <a class="text-white" alt="information about movie" href="detailM.html?url=${films.url}"onclick="Store('${films.url}')">${films.title}</a>           
                    </p>`
    
                   
                    ) 
    
                });
            });
         
        });

       
    
}
//// gör en funktionen som  lagrar urlen för att testa 
function Store(url) {
    localStorage.setItem("url", url);
}
