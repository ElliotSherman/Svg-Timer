var durationInput = document.querySelector('#duration');
var startButton = document.querySelector('#start');
var pauseButton = document.querySelector('#pause');
var timer = new Timer(durationInput, startButton, pauseButton, {
    onStart: function () {
        console.log('onStart');
    },
    onTick: function () {
        console.log('ticked down');
    },
    onComplete: function () {
        console.log('completed countdown');
    },
});
