// EVENT LISTENERS
const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');

// button.addEventListener('click', (event) => {
// 	console.log(`YOU CLICKED ${event.target.id}!`);
// 	// console.log(event.target);
// });

const whatIsTheId = (event) => {
	console.log(`YOU CLICKED ${event.target.id}!`);

	if (event.target.id === 'main-btn') {
		container.innerHTML = 'You clicked the MAIN BUTTON';
	}
	else {
		container.innerHTML = 'You clicked the OTHER BUTTON';
	}
};

button.addEventListener('click', whatIsTheId); // uses a callback

// TARGET other-btn and on click, run whatIsTheId
const button2 = document.querySelector('#other-btn');

button2.addEventListener('click', whatIsTheId);
