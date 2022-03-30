function btnColor(evt){
    evt.preventDefault();

    alert('Red');
}
let myFavoriteColor=document.querySelector('#color');
myFavoriteColor.addEventListener('click',btnColor);
console.log(myFavoriteColor)

function btnPlace(evt){
    evt.preventDefault();

    alert(`Wrestling NCAA's`);
}
let myFavoritePlace=document.querySelector('#place');
myFavoriteColor.addEventListener('click',btnPlace);


function btnRitual(evt){
    evt.preventDefault();

    alert('Eating');
}
let myFavoriteRitual=document.querySelector('#ritual');
myFavoriteColor.addEventListener('click',btnRitual);