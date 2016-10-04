function getRandomArrayInRangeOfSize(a,b,length){
	const array = new Array();

	for(let i=0;i<length;++i){
		array.push(0);
	}

	return array.fill(a);
}

export default {
	getRandomArrayInRangeOfSize
};
