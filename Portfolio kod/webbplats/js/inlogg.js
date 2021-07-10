$(document).ready(function () { // ny version 
    $.ajax({
        type: "GET",
        url: "http://webbred2.utb.hb.se/~fewe/api/api.php?data=students",
        success: function(data) {  // loopar för att hämta datan från api
      $(".box").prepend("<h2>"+"University of Borås"+"<br>"+"Log in student"+"</h2>") // selectar box classen och bifogar innan class element en h2 med en rubrik
 
        $("#login-btn").click(function() { // skapar en funktion från klickknappen
            var error=false; // variablen blir false när knappen körs igång
            for(i=0;i<data.length;i++){ //forloopar data från api
            if($("#username").val()==data[i].login.username&&$("#password").val()==data[i].login.password){  // skapar en conditional statement som kollar ifall inputvärdet av användnamn och inputvärdet av lösenord stämmer överens med användnamnet och lösenordet i api
                error=true;  // om conditinal statment stämmer sedan blir variablen error true
            }
            if($("#username").val()==0&&$("#password").val()==0){ // en till conditional statment som kollar ifall inputvärdet innehåller några bokstäver.
                alert("enter username and password") // om det inte innehåller nångot värde kommer en alert att komma upp.
                return false; // breakar  ifsatsen så att det inte fortsätter
            }
         
            if($("#username").val()==0||null){ //conditinal statement som kollar ifall användnamnen är lika med inget värde eller 0
                alert("enter username")// om input värdet på användarnamnet inte har något värtde eller har 0 bokstäver kommer det en alert med en text string
                return false; // breakar ifsatsen så att det inte fortsätter
            }
 
            if($("#password").val()==0||null){ //conditinal statement som kollar ifall lösenordet är lika med inget värde eller 0
                alert("enter password")// om input värdet på lösenordet inte har något värde eller några bokstäver kommer det en alert med en text string
                return false;// breakar ifsatsen så att det inte fortsätter
            }
         
        }
 
            if(error===true){  // conditinal statment som kollar ifall variablen är lika med true
                window.location.href="kurser.html"; // om conditinal statement går igenom länkas användaren till en annan sida
            } else{  // om det inte går igenom kommer det en text string med en error message.
                $(".box").append("Error message: wrong username or password")  // selectar box element och appenda en text string med en error message.
            }
            
        });
            
        }
    
});
});  
 
 


