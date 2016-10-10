import Valid from './valid';

function getRandomArrayInRangeOfSize(a, b, length) {
	Valid.integerTypeOfArguments(a, b, length);
	Valid.length(length);
	if (a > b) {
		[a, b] = [b, a];
	}

	const array = new Array();

	for (let i = 0; i < length; ++i) {
		array.push(Math.floor(Math.random() * (b - a + 1)) + a);
	}

	return array;
}

export default {
	getSimonSequence: (size)=>{
		return getRandomArrayInRangeOfSize(1,4,size);
	}
};
