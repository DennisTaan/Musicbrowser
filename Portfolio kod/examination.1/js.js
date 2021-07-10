 /*
   declare(skapar) en function.
   skapar sedan  en alert med en text string "du har blivit smurf" som kommer att komma upp vid tryck av knappen som finns i htmlen.
   deklarerar en variabel med namnet "text"  och tilldelar sedan med ett likhetstecken som är lika med en queryselector som väljer alla "span" i HTMLtexten.
   skapar sedan en forloop som går igenom varje spann i html.
   inne i forlopen skapar jag en villkor där jag först deklarer en variabel med namnet "i" som har värdet 0.
   Sedan deklarerar jag att så länge i är mindre än längden på tagen(span) så ska variabeln "i" öka med (i++) som innebär att att i ökar med 1.
   Jag skapade sedan en villkorsats med (comparison operators).
   I villkorsatsen säger det "ifall det finns något i tagg elementet(spann)som är(==) equal to stringen "katt" i texten så ska det ändra till "smurf" annars ändra till "Smurf"
*/
function bytaInnehåll(){
    alert("Du har blivit smurfad")
    var text=document.querySelectorAll("span");
    for(var i=0;i<text.length;i++){
            if(text[i].innerHTML == "katt"){
                text[i].innerHTML = "smurf";
            }else{
                text[i].innerHTML = 'Smurf';
            }
        }
/* deklarerar en variabel som är lika med en selector som väljer alla taggar med namnet "img" i html
   tar sedan bildernas index och src och ändrar det till mina egna bildlänkar
*/
var bilder=document.getElementsByTagName("img");
    bilder[0].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9qTlHoOO7tHS2mjIa2Ydok0c4BOyYl0qYRm7BxcRtd1Ebhuc";
    bilder[1].src="https://cdn.pixabay.com/photo/2018/07/18/07/42/pet-3545757_960_720.jpg";
    bilder[2].src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Bou.jpg/250px-Bou.jpg";
    bilder[3].src="http://www.franskbulldog.nu/wp-content/uploads/2013/07/Fransk-bulldog-bild-2.jpg";
    

/* deklarerar en variabel som är lika med en queryselector som väljer alla "h1,h2,h3"
   sedan la jag till en forloop som loopar igenom alla "h1,h2,h3" i htmlen
   inne i forlopen skapar jag en vilkor där jag först deklarer en variabel med namnet "i" som har värdet 0.
   Sedan deklarerar jag att så länge i är mindre än längden på tagen(span) så ska variabeln "i" öka med (i++) som innebär att att i ökar med 1 för att det inte ska bli en infinityloop.
   ändrar stylen på variabeln "rubriker" som lagrar("h1,h2,h3") till  färgen blue och typsnitten verdana  
   (extra uppgift) ändrar alla rubriker till stora bokstäver
*/
var rubriker=document.querySelectorAll("h1,h2,h3");
for(var i=0;i<rubriker.length;i++){
    rubriker[i].style.color="#038FF9";
    rubriker[i].style.fontFamily="cursive";
    rubriker[i].innerHTML=rubriker[i].innerHTML.toUpperCase();
    
    
    

}


}


