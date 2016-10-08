let cachedDOM = {};
const simonButtons = [];
let highlightDuration = 0;

function init(_cachedDOM, _highlightDuration = 400) {
	cachedDOM = _cachedDOM;
	const numberOfButtons = 4;
	for (let i = 1; i <= numberOfButtons; ++i) {
		const tmpBtn = cachedDOM.mainCircle.querySelector(`.btn${i}`);
		simonButtons.push(tmpBtn);
	}
	highlightDuration = _highlightDuration;
}

function animateMainCircle() {
	cachedDOM.mainCircle.classList.add('animate');
}

function toggleActive(target) {
	target.classList.toggle('active');
}

function renderCount(count) {
	cachedDOM.count.innerHTML = (count >= 10) ? count : `0${count}`;
}

function highlightButton(index) {
	toggleActive(simonButtons[index - 1]);

	window.setTimeout(() => {
		toggleActive(simonButtons[index - 1]);
	}, highlightDuration);
}

export default {
	init,
	animateMainCircle,
	toggleStrictMode: () => {
		toggleActive(cachedDOM.diode);
	},
	highlightButton,
	renderCount,
	toggleStartButton: ()=>{
		if(DEBUG){
			console.log('Toggling start button');
		}
		toggleActive(cachedDOM.startButton);
	}
};
