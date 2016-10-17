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
	gameInfo.maxStreak = 20;

	UI.init(cachedDOM, gameInfo.stepDuration);
	UI.animateMainCircle();
}

function start() {
	if (!UI.flags.isStartActive) {
		return;
	}

	UI.deactivateStartButton();
	gameInfo.simonSequence = GameTools.getSimonSequence(gameInfo.maxStreak);
	gameInfo.currentStreak = 0;
	switchToSimonState();
}

function reset() {
	gameInfo.simonSequence = [];
	gameInfo.currentStreak = 0;
	UI.reset();
}

function toggleStrictMode() {
	gameInfo.strictMode = !gameInfo.strictMode;
	UI.toggleStrictMode();
}

function playSequence() {
	UI.renderCount(++gameInfo.currentStreak);
	playStep(1);
}

function playStep(index) {
	UI.highlightButton(gameInfo.simonSequence[index - 1]);

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
	switchToInputState();
	gameInfo.playersCount = 0;
}

function onSimonButtonPress(event) {
	if (!UI.flags.isMainCircleTouchable) {
		return;
	}
	gameInfo.playersInput = event.target.id;

	if (gameInfo.playersInput == gameInfo.simonSequence[gameInfo.playersCount]) {
		makeButtonHighlighted(gameInfo.playersInput);
	} else {
		onPlayersFailure();
		return;
	}

	gameInfo.playersCount++;
}

function onPlayersFailure() {
	UI.playError();
	window.setTimeout(() => {
		if (UI.flags.isStrictModeActive) {
			reset();
			start();
		} else {
			gameInfo.playersCount = 0;
			gameInfo.currentStreak--;
			switchToSimonState();
		}
	}, gameInfo.stepDuration);
}

function onSimonButtonRelease() {

	if (!UI.flags.isMainCircleTouchable || gameInfo.isPlayersFailure) {
		return;
	}

	makeButtonNotHighlighted(gameInfo.playersInput);

	if (gameInfo.playersCount === gameInfo.currentStreak) {
		onPlayersSequenceEnd();
	}
}

function makeButtonHighlighted(index) {
	UI.makeButtonHighlighted(index);
}

function makeButtonNotHighlighted(index) {
	UI.makeButtonNotHighlighted(index);
}

function onPlayersSequenceEnd() {
	if (hasPlayerWon(gameInfo.playersCount)) {
		handleVictory();
		return;
	}

	switchToSimonState();
}

function hasPlayerWon(playersCount) {
	return playersCount === gameInfo.maxStreak;
}

function handleVictory() {
	UI.disableCircle();
	UI.playVictory();
}


export default {
	init,
	start,
	reset,
	toggleStrictMode,
	onSimonButtonPress,
	onSimonButtonRelease
};
