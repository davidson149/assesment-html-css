console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit succesful');
}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);

function imgMouseOver(evt){
	evt.preventDefault();

	alert('The champ is here');
}
let img=document.querySelector('img#src');
img.addEventListener('mouseover',imgMouseOver);



// let img=document.querySelector('#img');
// img.addEventListener("mouseover",()=>{
// img.alert="The champ is here!"
// });
// window.addEventListener('load',()=>{
// 	let logo=document.createElement('img');
// 	logo.addEventListener('mouseover',(evt)=>{
// 		alert('The champ is here!');
// 	});
// 	document.body.appendChild(logo);
// 	logo.src='https://pbs.twimg.com/media/BgTQSr_IgAEEuLK.jpg'
// });