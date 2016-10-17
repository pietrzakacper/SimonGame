//# sourceMappingURL=file:///media/kacper/Dane/Programowanie/Projekty/Web/Simon/js/dist/simon-min.js.map
import Game from './game';

const mainCircle = document.querySelector('.main-circle');
const startButton = mainCircle.querySelector('.start');
const resetButton = mainCircle.querySelector('.reset');
const strictButton = mainCircle.querySelector('.strict');
const simonButtons = mainCircle.querySelectorAll('.btn-row > .btn');

Game.init(mainCircle, simonButtons, startButton, resetButton);

startButton.addEventListener('click', Game.start);
resetButton.addEventListener('click', Game.reset);
strictButton.addEventListener('click', Game.toggleStrictMode);
Array.from(simonButtons).forEach(btn=>{
	btn.addEventListener('mousedown', Game.onSimonButtonPress);
	btn.addEventListener('mouseup', Game.onSimonButtonRelease);
});
