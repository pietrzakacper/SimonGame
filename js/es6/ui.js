let cachedDOM = {};
let highlightDuration = 0;
let highlightedButton = null;
const flags = {
	isStartActive: true,
	isMainCircleTouchable: false,
	isStrictModeActive: false
};


function init(_cachedDOM, _highlightDuration = 400) {
	cachedDOM = _cachedDOM;
	highlightDuration = _highlightDuration;
}

function animateMainCircle() {
	cachedDOM.mainCircle.classList.add('animate');
}

function toggleActive(target) {
	target.classList.toggle('active');
}

function activate(target){
	target.classList.add('active');
}

function deactivate(target){
	target.classList.remove('active');
}

function renderCount(count) {
	cachedDOM.count.innerHTML = (count >= 10) ? count : `0${count}`;
}

function highlightButton(index) {
	makeButtonHighlighted(index);

	window.setTimeout(() => {
		makeButtonNotHighlighted(index);
	}, highlightDuration);
}

function activateStartButton() {
	cachedDOM.startButton.classList.add('active');
	cachedDOM.startButton.classList.remove('disabled');
	flags.isStartActive = true;
}

function deactivateStartButton() {
	cachedDOM.startButton.classList.add('disabled');
	cachedDOM.startButton.classList.remove('active');
	flags.isStartActive = false;
}

function makeCircleTouchable() {
	cachedDOM.mainCircle.classList.add('touchable');
	flags.isMainCircleTouchable = true;
}

function disableCircle() {
	cachedDOM.mainCircle.classList.remove('touchable');
	flags.isMainCircleTouchable = false;
}

function makeButtonHighlighted(index) {
	highlightedButton = index;
	activate(cachedDOM.simonButtons[index - 1]);
}

function makeButtonNotHighlighted(index) {
	highlightedButton = null;
	deactivate(cachedDOM.simonButtons[index - 1]);
}

function reset(){
	deactivate(cachedDOM.diode);
	flags.isStrictModeActive = false;

	activateStartButton();

	if(highlightedButton !== null){
		makeButtonNotHighlighted(highlightedButton);
	}

	disableCircle();

	renderCount(0);
}

export default {
	init,
	animateMainCircle,
	toggleStrictMode: () => {
		flags.isStrictModeActive = !flags.isStrictModeActive;
		toggleActive(cachedDOM.diode);
	},
	highlightButton,
	renderCount,
	activateStartButton,
	deactivateStartButton,
	makeCircleTouchable,
	disableCircle,
	flags,
	makeButtonHighlighted,
	makeButtonNotHighlighted,
	reset
};
