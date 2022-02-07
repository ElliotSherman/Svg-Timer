var durationInput = document.querySelector('#duration');
var startButton = document.querySelector('#start');
var pauseButton = document.querySelector('#pause');
var circle = document.querySelector('circle');
var perimiter = parseFloat(circle.getAttribute('r')) * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', "".concat(perimiter));
var currentOffset = 0;
var timer = new Timer(durationInput, startButton, pauseButton, {
    onStart: function () {
        console.log('onStart');
    },
    onTick: function () {
        circle.setAttribute('stroke-dashoffset', "".concat(currentOffset));
        currentOffset = currentOffset - 50;
    },
    onComplete: function () {
        console.log('completed countdown');
    },
});
