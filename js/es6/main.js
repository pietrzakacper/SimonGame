//# sourceMappingURL=file:///media/kacper/Dane/Programowanie/Projekty/Web/Simon/js/dist/simon-min.js.map
import Game from './game';

const mainCircle = document.querySelector('.main-circle');
const startButton = mainCircle.querySelector('.start');
const resetButton = mainCircle.querySelector('.reset');
const strictButton = mainCircle.querySelector('.strict');
const simonButtons = mainCircle.querySelectorAll('.btn-row > .btn');


if(DEBUG){
	console.log('Starting application...');
	console.log(Game);
}
Game.init(mainCircle, simonButtons, startButton, resetButton);

if(DEBUG){
	console.log('pre events binding');
}
startButton.addEventListener('click', Game.start);
resetButton.addEventListener('click', Game.reset);
strictButton.addEventListener('click', Game.toggleStrictMode);
Array.from(simonButtons).forEach(btn=>{
	btn.addEventListener('mousedown', Game.onSimonButtonPress);
	btn.addEventListener('mouseup', Game.onSimonButtonRelease);
});


if(DEBUG){
	console.log('after events binding');
}
