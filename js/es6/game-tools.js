const debug = require('debug')('GameTools');

function getRandomArrayInRangeOfSize(a, b, length) {
	debug(`The getRandomArrayInRangeOfSize method, arguments are:\n	a: ${a}\n	b: ${b}\n	length: ${length}`);
	validIntegerTypeOfArguments(a, b, length);
	debug('after validate');
	validLength(length);
	if (a > b) {
		[a, b] = [b, a];
	}

	const array = new Array();

	for (let i = 0; i < length; ++i) {
		array.push(Math.floor(Math.random() * (b - a + 1)) + a);
	}

	return array;
}

function validIntegerTypeOfArguments() {
	const array = [].slice.call(arguments);
	debug(`In validate, number of arguments: ${array.length}`);
	array.forEach(arg => {
		debug(`\tValidating typeof '${arg}'...`);
		if (typeof arg !== 'number') {
			throw new Error('Given arguments must be numbers!');
		}
		debug('\tpassed!');
	});
}

function validLength(length) {
	if (length <= 0) {
		throw new Error('Given length argument is not a positive number');
	}
}


export default {
	getRandomArrayInRangeOfSize
};
