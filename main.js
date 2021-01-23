// CALLBACKS
const acceptsString1 = (str) => {
	return str;
};

const acceptsString2 = (str) => {
	return str;
};

const finishedString = (str, func) => {
	return func(str);
};

console.log(finishedString());
