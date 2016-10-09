!function t(e,n,o){function i(r,a){if(!n[r]){if(!e[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(u)return u(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[r]={exports:{}};e[r][0].call(s.exports,function(t){var n=e[r][1][t];return i(n?n:t)},s,s.exports,t,e,n,o)}return n[r].exports}for(var u="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}({1:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){if(r.default.integerTypeOfArguments(t,e,n),r.default.length(n),t>e){var o=[e,t];t=o[0],e=o[1]}for(var i=new Array,u=0;u<n;++u)i.push(Math.floor(Math.random()*(e-t+1))+t);return i}Object.defineProperty(n,"__esModule",{value:!0});var u=t("./valid"),r=o(u);n.default={getSimonSequence:function(){return i(1,4,20)}}},{"./valid":5}],2:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o){C.mainCircle=t,C.startButton=n,C.resetButton=o,C.simonButtons=e,C.diode=t.querySelector(".diode"),C.count=t.querySelector(".count"),B.stepDuration=1e3,B.breakDuration=200,B.strictMode=!1,B.isStartActive=!0,y.default.init(C,B.stepDuration),y.default.animateMainCircle()}function u(){y.default.flags.isStartActive&&(y.default.deactivateStartButton(),console.log("Started..."),B.simonSequence=M.default.getSimonSequence(),B.currentStreak=0,B.playersInput=[],console.log("Initially changing to simon state..."),d())}function r(){console.log("Reseted..."),y.default.activateStartButton(),y.default.renderCount(0)}function a(){B.strictMode=!B.strictMode,y.default.toggleStrictMode()}function c(){y.default.renderCount(B.currentStreak+1),l(0)}function l(t){y.default.highlightButton(B.simonSequence[t]),B.currentStreak>t?window.setTimeout(function(){l(t+1)},B.stepDuration+B.breakDuration):window.setTimeout(function(){f()},B.stepDuration)}function s(){y.default.makeCircleTouchable()}function d(){y.default.disableCircle(),window.setTimeout(function(){c()},500)}function f(){B.currentStreak++,s(),B.playersCount=0}function g(t){y.default.flags.isMainCircleTouchable&&(B.playersInput=t.target.id,console.log("input is: "+B.playersInput+" on index: "+B.playersCount+" expected is: "+B.simonSequence[B.playersCount]),B.playersInput==B.simonSequence[B.playersCount]&&(console.log("Making button highlighted..."),v(B.playersInput)))}function m(){y.default.flags.isMainCircleTouchable&&(console.log(B.playersInput+" button released"),p(B.playersInput),B.playersCount++,B.playersCount===B.currentStreak&&h())}function v(t){y.default.makeButtonHighlighted(t)}function p(t){y.default.makeButtonNotHighlighted(t)}function h(){console.log("End of player's sequence"),d()}Object.defineProperty(n,"__esModule",{value:!0});var S=t("./ui.js"),y=o(S),b=t("./game-tools"),M=o(b),C={},B={};n.default={init:i,start:u,reset:r,toggleStrictMode:a,onSimonButtonPress:g,onSimonButtonRelease:m}},{"./game-tools":1,"./ui.js":4}],3:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=t("./game"),u=o(i),r=document.querySelector(".main-circle"),a=r.querySelector(".start"),c=r.querySelector(".reset"),l=r.querySelector(".strict"),s=r.querySelectorAll(".btn-row > .btn");console.log("Starting application..."),console.log(u.default),u.default.init(r,s,a,c),console.log("pre events binding"),a.addEventListener("click",u.default.start),c.addEventListener("click",u.default.reset),l.addEventListener("click",u.default.toggleStrictMode),Array.from(s).forEach(function(t){t.addEventListener("mousedown",u.default.onSimonButtonPress),t.addEventListener("mouseup",u.default.onSimonButtonRelease)}),console.log("after events binding")},{"./game":2}],4:[function(t,e,n){"use strict";function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400;p=t,h=e}function i(){p.mainCircle.classList.add("animate")}function u(t){t.classList.toggle("active")}function r(t){t.classList.add("active")}function a(t){t.classList.remove("active")}function c(t){p.count.innerHTML=t>=10?t:"0"+t}function l(t){u(p.simonButtons[t-1]),window.setTimeout(function(){u(p.simonButtons[t-1])},h)}function s(){p.startButton.classList.add("active"),S.isStartActive=!0}function d(){p.startButton.classList.add("disabled"),p.startButton.classList.remove("active"),S.isStartActive=!1}function f(){p.mainCircle.classList.add("touchable"),S.isMainCircleTouchable=!0}function g(){p.mainCircle.classList.remove("touchable"),S.isMainCircleTouchable=!1}function m(t){r(p.simonButtons[t-1])}function v(t){a(p.simonButtons[t-1])}Object.defineProperty(n,"__esModule",{value:!0});var p={},h=0,S={isStartActive:!0,isMainCircleTouchable:!1};n.default={init:o,animateMainCircle:i,toggleStrictMode:function(){u(p.diode)},highlightButton:l,renderCount:c,activateStartButton:s,deactivateStartButton:d,makeCircleTouchable:f,disableCircle:g,flags:S,makeButtonHighlighted:m,makeButtonNotHighlighted:v}},{}],5:[function(t,e,n){"use strict";function o(){var t=[].slice.call(arguments);t.forEach(function(t){if("number"!=typeof t)throw new Error("Given arguments must be numbers!")})}function i(t){if(t<=0)throw new Error("Given length argument is not a positive number")}Object.defineProperty(n,"__esModule",{value:!0}),n.default={length:i,integerTypeOfArguments:o}},{}]},{},[3]);
//# sourceMappingURL=simon-min.js.map
