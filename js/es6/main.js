//# sourceMappingURL=file:///media/kacper/Dane/Programowanie/Projekty/Web/Simon/js/dist/simon-min.js.map
import Game from './game';

const mainCircle = document.querySelector('.main-circle');
const startButton = mainCircle.querySelector('.start');
const resetButton = mainCircle.querySelector('.reset');
const strictButton = mainCircle.querySelector('.strict');

if(DEBUG){
	console.log('Starting application...');
	console.log(Game);
}
Game.init(mainCircle);

if(DEBUG){
	console.log('pre events binding');
}
startButton.addEventListener('click', Game.start);
resetButton.addEventListener('click', Game.reset);
strictButton.addEventListener('click', Game.toggleStrictMode);

if(DEBUG){
	console.log('after events binding');
}
