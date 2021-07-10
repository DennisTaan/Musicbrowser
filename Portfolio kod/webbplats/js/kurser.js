       //hämtar API för kurser
       $.get("http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses", data => {
            data.forEach(course => {
        //hämtar kursnamnen och poäng från API
                $("#result > tbody").append("<tr><td>" + course.courseName + "</td><td>" + course.credit + "</td></tr>");
            }); 
        });
        //skapar knappar till kursernas länkar till info
        $(document).ready(function(){
            $("button").click(function(){
              $("#info").attr("href", " ");
            });
          });


          