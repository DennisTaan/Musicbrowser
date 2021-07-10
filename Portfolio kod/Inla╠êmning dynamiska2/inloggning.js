$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://webbred2.utb.hb.se/~fewe/api/api.php?data=students",
        success: function(data) { // hämtar data från api och lägger det i "data"
      $(".box").prepend("<h2>"+"University of Borås"+"<br>"+"Log in student"+"</h2>")// lägger till en text i header

        $("#login-btn").click(function() {// tar tag i en knapp och vid klick utgör en funktion
            var error=false;// när knappen klickas blir variabeln lika med falsk , detta pågrund av att senare kunna göra en conditional statement
            for(i=0;i<data.length;i++){// loopar datan
            if($("#username").val()==data[i].login.username&&$("#password").val()==data[i].login.password){ // gör en conditional staement, om input id "username" value är lika med apis inlogning namn och input med id "password" är lika med apis lösenord
                error=true; // om rad 13 conditional statement stämmer överens ändras error från false till true
            }
        }

            if(error===true){ // gör en till conditinoal statment. Om varibaeln error är lika med true efter föregående conditinal statement går det då vidare till rad 19
                window.location.href="kurs.html"; // om conditinal statment stämmer från rad 18 länkas användare till "kurs.html" filen
            } else{ // om rad 18 inte går igenom går det vidare till rad 21
                $(".box").append("Error message: wrong username or password") // här får användare text på en p element med id errormessage "wrong username or password"
            }
            
        });
            
        }
    
});
});  

