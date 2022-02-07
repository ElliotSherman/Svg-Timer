var Timer = /** @class */ (function () {
    function Timer(durationInput, startBtn, pauseBtn) {
        var _this = this;
        this.start = function () {
            _this.tick();
            _this.interval = setInterval(_this.tick, 1000);
        };
        this.pause = function () {
            clearInterval(_this.interval);
            console.log('paused');
        };
        this.tick = function () {
            var timeRemaining = parseFloat(_this.durationInput.value);
            _this.durationInput.value = (timeRemaining - 1).toString();
        };
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }
    ;
    return Timer;
}());
var durationInput = document.querySelector('#duration');
var startButton = document.querySelector('#start');
var pauseButton = document.querySelector('#pause');
var timer = new Timer(durationInput, startButton, pauseButton);
