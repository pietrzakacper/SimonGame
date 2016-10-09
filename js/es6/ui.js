let cachedDOM = {};
let highlightDuration = 0;
const flags = {
	isStartActive: true,
	isMainCircleTouchable: false
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
	toggleActive(cachedDOM.simonButtons[index - 1]);

	window.setTimeout(() => {
		toggleActive(cachedDOM.simonButtons[index - 1]);
	}, highlightDuration);
}

function activateStartButton() {
	cachedDOM.startButton.classList.add('active');
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
	activate(cachedDOM.simonButtons[index - 1]);
}

function makeButtonNotHighlighted(index) {
	deactivate(cachedDOM.simonButtons[index - 1]);
}

export default {
	init,
	animateMainCircle,
	toggleStrictMode: () => {
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
	makeButtonNotHighlighted
};
