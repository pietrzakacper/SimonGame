import UI from './ui.js';
import GameTools from './game-tools';

const cachedDOM = {};
let gameInfo = {};

function init(mainCircle, simonButtons, startButton, resetButton) {
	cachedDOM.mainCircle = mainCircle;
	cachedDOM.startButton = startButton;
	cachedDOM.resetButton = resetButton;
	cachedDOM.simonButtons = simonButtons;
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
	if (!UI.flags.isStartActive) {
		return;
	}

	UI.deactivateStartButton();

	if (DEBUG) {
		console.log('Started...');
	}
	gameInfo.simonSequence = GameTools.getSimonSequence();
	gameInfo.currentStreak = 0;
	gameInfo.playersInput = [];
	//TODO set timeout
	if (DEBUG) {
		console.log('Initially changing to simon state...');
	}
	switchToSimonState();
}

function reset() {
	if (DEBUG) {
		console.log('Reseted...');
	}
	UI.activateStartButton();
	//TODO implement reset properly

	UI.renderCount(0);
}

function toggleStrictMode() {
	gameInfo.strictMode = !gameInfo.strictMode;
	UI.toggleStrictMode();
}

function playSequence() {
	UI.renderCount(gameInfo.currentStreak + 1);
	playStep(0);
}

function playStep(index) {
	UI.highlightButton(gameInfo.simonSequence[index]);

	if (gameInfo.currentStreak > index) {
		window.setTimeout(() => {
			playStep(index + 1);
		}, gameInfo.stepDuration + gameInfo.breakDuration);
	} else {
		window.setTimeout(() => {
			onSequenceEnd();
		}, gameInfo.stepDuration);
	}
}

function switchToInputState() {
	UI.makeCircleTouchable();
}

function switchToSimonState() {
	UI.disableCircle();
	window.setTimeout(() => {
		playSequence();
	}, 500);
}

function onSequenceEnd() {
	gameInfo.currentStreak++;
	switchToInputState();
	gameInfo.playersCount = 0;
}

function onSimonButtonPress(event) {
	if (!UI.flags.isMainCircleTouchable) {
		return;
	}
	gameInfo.playersInput = event.target.id;

	if (DEBUG) {
		console.log(`input is: ${gameInfo.playersInput} on index: ${gameInfo.playersCount} expected is: ${gameInfo.simonSequence[gameInfo.playersCount]}`);

	}

	if (gameInfo.playersInput == gameInfo.simonSequence[gameInfo.playersCount]) {
		if (DEBUG) {
			console.log('Making button highlighted...');
		}
		makeButtonHighlighted(gameInfo.playersInput);
	} else {
		//handle failure
	}
}

function onSimonButtonRelease() {

	if (!UI.flags.isMainCircleTouchable) {
		return;
	}

	if (DEBUG) {
		console.log(gameInfo.playersInput + ' button released');
	}

	makeButtonNotHighlighted(gameInfo.playersInput);

	gameInfo.playersCount++;

	if (gameInfo.playersCount === gameInfo.currentStreak) {
		onPlayersSequenceEnd();
	}
}

function makeButtonHighlighted(index) {
	//sound.start
	UI.makeButtonHighlighted(index);
}

function makeButtonNotHighlighted(index) {
	//sound.stop
	UI.makeButtonNotHighlighted(index);
}

function onPlayersSequenceEnd() {
	if (DEBUG) {
		console.log('End of player\'s sequence');
	}

	switchToSimonState();
}


export default {
	init,
	start,
	reset,
	toggleStrictMode,
	onSimonButtonPress,
	onSimonButtonRelease
};
