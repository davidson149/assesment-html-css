let myFavoriteColor=document.querySelector(`#my-favorite-color`);

myFavoriteColor.addEventListener("click",getColor);
function getColor(){
    document.getElementById("color").innerHTML="Red";
}