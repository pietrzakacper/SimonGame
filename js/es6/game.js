import UI from './ui.js';

const cachedDOM = {};

let strictMode = false;


function init(mainCircle){
	cachedDOM.mainCircle = mainCircle;
	cachedDOM['diode'] = mainCircle.querySelector('.diode');
	UI.animate(mainCircle);
}

function start(){
	console.log('Started...');
}

function reset(){
	console.log('Reseted...');
}

function toggleStrictMode(){
	strictMode = !strictMode;
	UI.toggleActive(cachedDOM['diode']);
}


export default {
	init,
	start,
	reset,
	toggleStrictMode
};
