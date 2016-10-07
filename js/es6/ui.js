function animate(target){
	target.classList.add('animate');
}

function toggleActive(target){
	target.classList.toggle('active');
}


export default{
	animate,
	toggleActive
};
