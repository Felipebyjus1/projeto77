var images = ["capa de album.jpg","mae.png","pai.avif","crianca.png"]
var names = ["Album de Família", "Aline", "Marcelo","Felipe"]

var 1 = 0;
function update()
{
    i++;
    var numbersOfFamilyMemberInArrey = 3
    if(1 > numbersOfFamilyMemberInArrey )
    {

      1 = 0;

    }
     var updateImage = images[1]; 
     var updateName = names[1];
document.getElementById("familyMenberImage").src = updateImage
document.getElementById("familyMenberName").innerHTML = updateName
}