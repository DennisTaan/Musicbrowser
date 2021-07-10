$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses",
        success: function(data) { // hämtar data från api
            $("#header").append("<h1>Kursinformation</h1>")// tar tag i header i htmlen och appendar en h1 med en text som rubrik
            $(".kurs-box").append($("<div>").attr("id","kurser"));// selectar .kurs-box och skapar en div med ett id "kurser"
            $("footer").text("Skolgatan 17, 50190, Borås Sverige"); // väljer footer i html och lägger till en text.

            for(i=0;i<data.length;i++){// loopar data 
        $("#kurser").append("<p>"+"<br>Course name:"+" "+data[i].courseName+"</p>");// selectar div med id"kurser" och bifogar en p tag med en break och en text string och kursnamn från api
        $("#kurser").append("<p>"+"School:"+" "+data[i].school+"</p>");//selectar div med id"kurser" och bifogar p tag och en text string och sedan skolans namn från api
        $("#kurser").append("<p>"+"Credit points:"+" "+data[i].credit+"p"+"</p>");//selectar div med id"kurser" och bifogar p tag och en text string och kurspoäng från api
        $("#kurser").append("<p>"+"Starts at week:"+" "+data[i].startWeek+"</p>");//selectar div med id"kurser" och bifogar p tag, en text string och startvecka från api
        $("#kurser").append("<p>"+"End at week:"+" "+data[i].endWeek+"</p>");//selectar div med id"kurser" och bifogar p tag , text string  och slutvecka från api
        $("#kurser").append("<p>"+"Course ID:"+" "+data[i].courseId+"</p>");//selectar div med id"kurser" och bifogar p tag och en text string

            }
        }      
        });
});
 










