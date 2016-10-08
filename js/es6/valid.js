function validIntegerTypeOfArguments() {
	const array = [].slice.call(arguments);

	array.forEach(arg => {
		if (typeof arg !== 'number') {
			throw new Error('Given arguments must be numbers!');
		}
	});
}

function validLength(length) {
	if (length <= 0) {
		throw new Error('Given length argument is not a positive number');
	}
}

export default {
	length: validLength,
	integerTypeOfArguments: validIntegerTypeOfArguments
};
