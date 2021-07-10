var filmUrl = localStorage.getItem("url"); // använder getitem för att komma åt url från den först js filen

getDetail(filmUrl); // lägger det i paremetern


function getDetail() { // skapar en funktionen av url
    $.get(filmUrl, function (data) {  // hämtar url och skapar en function med ett namn på parametern
        //console.log(item);
        $(".title").append(`<p> ${data.title}</p>`); // appendar title till elmenten title
        $(".director").append(`<p>Director:  ${data.director}</p>`); // appendar regissör till elmenten director
        $(".beskrivning").append(`<p> ${data.opening_crawl}</p>`);// appendar filmbeskrivning till elmenten beskrivning



        

        $(data.characters).each(function (i, characterData) { // hämtar karatären och loopar
            $.get(characterData, function (character) { // skapar sedan en function
               // väljer elementent characters och länkar sedan till humanhtml med en url som är lika med characters.url ,appendar filmkaraktären från apiet och lagrar sedan url
                $(".characters").append(
                    `
                    <div class='content1'
                    <h1 class="title"> <strong>Name:</strong>
                    <a class="info_link text-white" alt="information about Movies" href="human.html?url=${character.url}" onclick="Store('${character.url}')" >${character.name}</a>           
                    </h1>
                    </div>
                    `
                );
               
                $(".characters").append(`<hr>`);

            });
        });
    });
    
}
// gör en funktionen som  lagrar urlen för att sedan kunna komma åt urlen på en annan sida
function Store(url) {
    localStorage.setItem("urlFilm", url);
}


