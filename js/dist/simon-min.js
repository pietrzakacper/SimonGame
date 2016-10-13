!function e(t,n,i){function o(r,a){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!a&&l)return l(r,!0);if(u)return u(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[r]={exports:{}};t[r][0].call(s.exports,function(e){var n=t[r][1][e];return o(n?n:e)},s,s.exports,e,t,n,i)}return n[r].exports}for(var u="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}({1:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){if(r.default.integerTypeOfArguments(e,t,n),r.default.length(n),e>t){var i=[t,e];e=i[0],t=i[1]}for(var o=new Array,u=0;u<n;++u)o.push(Math.floor(Math.random()*(t-e+1))+e);return o}Object.defineProperty(n,"__esModule",{value:!0});var u=e("./valid"),r=i(u);n.default={getSimonSequence:function(e){return o(1,4,e)}}},{"./valid":5}],2:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,i){q.mainCircle=e,q.startButton=n,q.resetButton=i,q.simonButtons=t,q.diode=e.querySelector(".diode"),q.count=e.querySelector(".count"),w.stepDuration=1e3,w.breakDuration=200,w.strictMode=!1,w.isStartActive=!0,C.default.init(q,w.stepDuration),C.default.animateMainCircle()}function u(){C.default.flags.isStartActive&&(C.default.deactivateStartButton(),w.maxStreak=20,w.simonSequence=k.default.getSimonSequence(w.maxStreak),console.log("Simon Sequence is: "),console.log(w.simonSequence),w.currentStreak=0,d())}function r(){console.log("Reseted..."),w.simonSequence=[],w.currentStreak=0,C.default.reset()}function a(){w.strictMode=!w.strictMode,C.default.toggleStrictMode()}function l(){C.default.renderCount(++w.currentStreak),c(1)}function c(e){C.default.highlightButton(w.simonSequence[e-1]),w.currentStreak>e?window.setTimeout(function(){c(e+1)},w.stepDuration+w.breakDuration):window.setTimeout(function(){f()},w.stepDuration)}function s(){C.default.makeCircleTouchable()}function d(){C.default.disableCircle(),window.setTimeout(function(){l()},500)}function f(){s(),w.playersCount=0}function m(e){if(C.default.flags.isMainCircleTouchable){if(w.playersInput=e.target.id,console.log("input is: "+w.playersInput+" on index: "+w.playersCount+" expected is: "+w.simonSequence[w.playersCount]),w.playersInput!=w.simonSequence[w.playersCount])return void g();console.log("Making button highlighted..."),p(w.playersInput),w.playersCount++}}function g(){console.log("player failed..."),C.default.flags.isStrictModeActive||(w.playersCount=0,w.currentStreak--,d())}function v(){C.default.flags.isMainCircleTouchable&&!w.isPlayersFailure&&(console.log(w.playersInput+" button released"),S(w.playersInput),w.playersCount===w.currentStreak&&h())}function p(e){C.default.makeButtonHighlighted(e)}function S(e){C.default.makeButtonNotHighlighted(e)}function h(){return console.log("End of player's sequence"),y(w.playersCount)?void M():void d()}function y(e){return e===w.maxStreak}function M(){C.default.disableCircle(),console.log("player has won")}Object.defineProperty(n,"__esModule",{value:!0});var b=e("./ui.js"),C=i(b),B=e("./game-tools"),k=i(B),q={},w={};n.default={init:o,start:u,reset:r,toggleStrictMode:a,onSimonButtonPress:m,onSimonButtonRelease:v}},{"./game-tools":1,"./ui.js":4}],3:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=e("./game"),u=i(o),r=document.querySelector(".main-circle"),a=r.querySelector(".start"),l=r.querySelector(".reset"),c=r.querySelector(".strict"),s=r.querySelectorAll(".btn-row > .btn");console.log("Starting application..."),u.default.init(r,s,a,l),a.addEventListener("click",u.default.start),l.addEventListener("click",u.default.reset),c.addEventListener("click",u.default.toggleStrictMode),Array.from(s).forEach(function(e){e.addEventListener("mousedown",u.default.onSimonButtonPress),e.addEventListener("mouseup",u.default.onSimonButtonRelease)})},{"./game":2}],4:[function(e,t,n){"use strict";function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400;y=e,M=t;for(var n=0;n<4;++n){var i=new Audio("sounds/simonSound"+(n+1)+".mp3");console.log("creating audio: "+("sounds/simonSound"+(n+1)+".mp3")),k.push(i)}}function o(){y.mainCircle.classList.add("animate")}function u(e){e.classList.toggle("active")}function r(e){e.classList.add("active")}function a(e){e.classList.remove("active")}function l(e){y.count.innerHTML=e>=10?e:"0"+e}function c(e){g(e),window.setTimeout(function(){v(e)},M)}function s(){y.startButton.classList.add("active"),y.startButton.classList.remove("disabled"),B.isStartActive=!0}function d(){y.startButton.classList.add("disabled"),y.startButton.classList.remove("active"),B.isStartActive=!1}function f(){y.mainCircle.classList.add("touchable"),B.isMainCircleTouchable=!0}function m(){y.mainCircle.classList.remove("touchable"),B.isMainCircleTouchable=!1}function g(e){C=e,r(y.simonButtons[e-1]),S(e)}function v(e){C=null,a(y.simonButtons[e-1]),h(e)}function p(){a(y.diode),B.isStrictModeActive=!1,s(),null!==C&&v(C),m(),l(0)}function S(e){null!=b&&h(b,!0),b=e,k[e-1].play()}function h(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!t&&k[e-1].currentTime<M?(console.log("setting time out..."),window.setTimeout(function(){console.log(" timed out!!!..."),k[e-1].pause(),k[e-1].currentTime=0,b=null},1e3*(M-k[e-1].currentTime))):(console.log("else, stopping..."),k[e-1].pause(),k[e-1].currentTime=0,b=null)}Object.defineProperty(n,"__esModule",{value:!0});var y={},M=0,b=null,C=null,B={isStartActive:!0,isMainCircleTouchable:!1,isStrictModeActive:!1},k=[];n.default={init:i,animateMainCircle:o,toggleStrictMode:function(){B.isStrictModeActive=!B.isStrictModeActive,u(y.diode)},highlightButton:c,renderCount:l,activateStartButton:s,deactivateStartButton:d,makeCircleTouchable:f,disableCircle:m,flags:B,makeButtonHighlighted:g,makeButtonNotHighlighted:v,reset:p}},{}],5:[function(e,t,n){"use strict";function i(){var e=[].slice.call(arguments);e.forEach(function(e){if("number"!=typeof e)throw new Error("Given arguments must be numbers!")})}function o(e){if(e<=0)throw new Error("Given length argument is not a positive number")}Object.defineProperty(n,"__esModule",{value:!0}),n.default={length:o,integerTypeOfArguments:i}},{}]},{},[3]);
//# sourceMappingURL=simon-min.js.map
