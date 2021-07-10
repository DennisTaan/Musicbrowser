/*declare, tar buttons onclick function och gör följande
skapar en varibel med namn item som skapar ett li element
skapar sedan en till variabel som är lika med en queryselector som tar tag i alla "ul" i htmlen.
skapar en till variabel som är lika med en selector som väljer efter id och i detta fallet tar jag tag i input taggen som har ett id med "myInput",
med value hämtar jag direkt information som är lagrad i input taggen.
variabeln item som är laddad med li sätter jag sedan i innerhtml som är lika med text
och sist appendar jag variabeln item(li) i variabeln "lista"(ul).*/
function nyttElement(){
    var item = document.createElement('li');
    var lista=document.querySelector("ul");
    var text = document.getElementById('myInput').value;
    item.innerHTML = text;
lista.append(item);
}

 /*skapar en variabel med namn allaUl som är lika med en selector som tar tag i ul i htmlen
 med variabeln sedan lägger jag till en onclick event som är lika med en fuction som jag kallar för "changeColor"
 skapar sedan en ifsats där jag använder mig utav target-property som väljer de tagnamnen som är exakt lika med "LI"
när man sedan klickar  på det target-property är lika med text decoration line through och färgen ändras till röd*/

var allaUl = document.querySelector("ul");
allaUl.onclick= function(changeStyle) {
  if (changeStyle.target.tagName === "LI") {
    changeStyle.target.style.textDecoration="line-through"}
    changeStyle.target.style.color="red";

}






