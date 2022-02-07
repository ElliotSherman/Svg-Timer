var durationInput = document.querySelector('#duration');
var startButton = document.querySelector('#start');
var pauseButton = document.querySelector('#pause');
var circle = document.querySelector('circle');
var perimiter = parseFloat(circle.getAttribute('r')) * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', "".concat(perimiter));
var duration;
var timer = new Timer(durationInput, startButton, pauseButton, {
    onStart: function (totalDuration) {
        duration = totalDuration;
        console.log('onStart');
    },
    onTick: function (timeRemaining) {
        circle.setAttribute('stroke-dashoffset', "".concat(perimiter * timeRemaining / duration - perimiter));
    },
    onComplete: function () {
        console.log('completed countdown');
    },
});
