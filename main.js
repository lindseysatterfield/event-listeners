const firstObj = {};

const user = {
	username        : 'biz.markie',
	password        : 'abc123',
	lovesJavascript : true,
	favoriteNumber  : 42
};

// DOT NOTATION
// GETS VALUES OUT OF AN OBJECT
// console.log(user.lovesJavascript);
// console.log(user.username);

// BRACKET NOTATION
// console.log(user['password']);
// console.log(user['favoriteNumber']);
// console.log(user.favoriteNumber);

// ASSIGNING VALUES
const newUser = {
	isNew : true
};

// newUser.username = 'fresh.prince'; // dot notation
// newUser['password'] = 'abcd1234'; // bracket notation
// newUser[1] = 'abcd1234'; // puts it in the first spot
// console.log(newUser);

// METHODS: FUNCTIONS AS VALUES
const newObject = {
	username : 'Teresa',
	sayHello : function () {
		console.log(`${this.username} says Hello!`);
	} // gives you Teresa says Hello!
};
newObject.username = 'Aja';
// newObject.sayHello();

// ITERATE OVER AN OBJECT
const userTwo = {
	username        : 'trinity.christiana',
	password        : 'xyz0987',
	lovesJavascript : true,
	favoriteNumber  : 12
};

for (let key in userTwo) {
	console.log(key); // keys
	// console.log(userTwo[key]); // gives the values
	// console.log(userTwo.key); // values NOOOOO, use bracket notation instead
}
