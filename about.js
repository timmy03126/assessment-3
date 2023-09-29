console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`The form has been submitted!`);
}
function handleMouseOver(event) {
	event.preventDefault()

	alert(`You look so good today!`)
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let compliment = document.querySelector(`img`);

compliment.addEventListener(`mouseover`, handleMouseOver)