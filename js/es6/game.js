import UI from './ui.js';
import GameTools from './game-tools';

const cachedDOM = {};
let gameInfo = {};

function init(mainCircle, startButton, resetButton) {
	cachedDOM.mainCircle = mainCircle;
	cachedDOM.startButton = startButton;
	cachedDOM.resetButton = resetButton;
	cachedDOM.diode = mainCircle.querySelector('.diode');
	cachedDOM.count = mainCircle.querySelector('.count');

	gameInfo.stepDuration = 1000;
	gameInfo.breakDuration = 200;
	gameInfo.strictMode = false;
	gameInfo.isStartActive = true;

	UI.init(cachedDOM, gameInfo.stepDuration);
	UI.animateMainCircle();
}

function start() {
	if(!gameInfo.isStartActive){
		return;
	}

	if (DEBUG) {
		console.log('Started...');
	}

	gameInfo.simonSequence = GameTools.getSimonSequence();
	gameInfo.currentStreak = 0;

	//TODO set timeout
	playSequence();
}

function reset() {
	if (DEBUG) {
		console.log('Reseted...');
	}

	//TODO implement reset properly

	UI.renderCount(0);
}

function toggleStrictMode() {
	gameInfo.strictMode = !gameInfo.strictMode;
	UI.toggleStrictMode();
}

function playSequence() {
	UI.renderCount(gameInfo.currentStreak+1);
	switchGameState();
	playStep(0);
}

function playStep(index) {
	UI.highlightButton(gameInfo.simonSequence[index]);

	if (gameInfo.currentStreak > index) {
		window.setTimeout(() => {
			playStep(index + 1);
		}, gameInfo.stepDuration + gameInfo.breakDuration);
	} else{
		//case end

		window.setTimeout(()=>{
			switchGameState();
		}, gameInfo.stepDuration);

		gameInfo.currentStreak++;
	}
}

function switchGameState() {
	UI.toggleStartButton();
	gameInfo.isStartActive = !gameInfo.isStartActive;
}


export default {
	init,
	start,
	reset,
	toggleStrictMode
};
