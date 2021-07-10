$(document).ready(function () { // ny version med knapp tvo
  $.ajax({
      type: "GET",
      url: "http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz",
      success: function(data) {
      questions(data);
    }
});
});

var rightAnswer=[]; // skapar en global tom array

function questions(data){ // skapar en funktion från inhämtad data
  for(var i=0;i<data.length;i++){ // loopar igenom den inhämtade datan
    var right=data[i].correct_answer; // skapar en variabel som håller alla rätta svar
    var questions=data[i].question// variabel som håller i alla frågor
    var wrong=data[i].incorrect_answers;// variabel som håller alla fela svar
   
    rightAnswer[i]=right; // i den tomma arrayen fyller jag det med med de rätta svaren
    var allAnswer=wrong; // ny variabel med fel svar
    allAnswer.push(right); //pushar alla rätta till den tidigare variablen 
    $(".box").append($("<ul></ul>").append($("<li></li>").append($("<h5></h5>").append(questions)))); // hämtar min "table" och appendar "ul". i ul appenar jag "li" och i li appendar jag  med frågorna från datan.
    $.each(allAnswer,function(index,quizanswer){ // loopar båda rätta och fel svaren
      
      $("ul:eq("+i+")").append($("<input>").attr({name: i , value: quizanswer, type:"radio" , id:"answer"+ index}), // i ul index appendar en input med ett namn, value radio typ och med inladdad data
      $("<span></span>").attr("for","answer"+index).text(quizanswer)); // skapar spann som håller alla svar 
    });
   
      }
    $(".knapp").on("click",function () { // när knappen trycks körs en funktion igång
    $("input:radio:checked").each(function () { // loopar inputen cheked och gör en funktion
      check = true; // varibalen check blir true när det går igång

      for(var i = 0; i < rightAnswer.length; i++){  // loopar igenom rättsvar
          if($(this).val() == rightAnswer[i]) {// en conditional statement som kollar ifall inputens värde är lika med rättsvars 
              check = false; // variblen check blir false om conditional statement går igenom
          }

      }
      

      if(check == false){ // om variablen är lika med true efter funktionen
          $(this).parent().find('span[for="' + $(this).attr("id") + '"]').addClass("greenanswer");// letar sedan efter input värdes parent som är spann och lägger till ett classnamn
          $(".greenanswer").css("background-color","green"); // class namnen byter sedan bakgrundsfärg
      }
      
      else{
        $(this).parent().find('span[for="' + $(this).attr("id") + '"]').addClass("redanswer"); // letar efter input värdes paren som är lika med spann och lägger till ett classnamn
        $(".redanswer").css("background-color","red"); // class namnen byter sedan bakgrundsfärg

      }
      

  })
 

})
$(".knapptvo").on("click",function () {  // skapar en on click funktion för knapp två
  alert("Rätt svar= border , Fel svar =line through") // en alert som visar vad som visar rätt svar och vad som visar fel svar
  $("input:radio:checked").each(function () {  // loopar input check och gör en funktion
      check = true; // variablen blir true

      for(var i = 0; i < rightAnswer.length; i++){  //loopar rätta svar
          if($(this).val() == rightAnswer[i]) { //conditinal statment som kollar ifall input värdet är lika med rätt svar
              check = false;  //check blir där med false
          }

      }
      

      if(check == false){ 
          $(this).parent().find('span[for="' + $(this).attr("id") + '"]').addClass("rightanswer");// letar sedan efter input värdes parent som är spann och lägger till ett classnamn
          $(".rightanswer").css('border', '1px solid white'); // classnamnen byter sedan css och lägger till en border för rätt svar    
      }
      
      else{
        $(this).parent().find('span[for="' + $(this).attr("id") + '"]').addClass("wronganswer"); // letar sedan efter input värdes parent som är spann och lägger till ett classnamn
        $(".wronganswer").css('text-decoration', 'line-through'); // classnamnen byter sedan css och lägger till en line-through på de felaktiga svaren.
        

      }
      

  })
 

})
 

}

