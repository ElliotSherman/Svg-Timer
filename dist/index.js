var Timer = /** @class */ (function () {
    function Timer(durationInput, startBtn, pauseBtn, callbacks) {
        var _this = this;
        this.start = function () {
            if (_this.onStart) {
                _this.onStart();
            }
            _this.tick();
            _this.interval = setInterval(_this.tick, 1000);
        };
        this.pause = function () {
            clearInterval(_this.interval);
            console.log('paused');
        };
        this.tick = function () {
            if (_this.timeRemaining <= 0) {
                _this.pause();
            }
            else {
                _this.timeRemaining = _this.timeRemaining - 1;
            }
        };
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if (callbacks) {
            this.onStart = callbacks.onStart;
        }
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }
    ;
    Object.defineProperty(Timer.prototype, "timeRemaining", {
        get: function () {
            return parseFloat(this.durationInput.value);
        },
        set: function (time) {
            this.durationInput.value = time.toString();
        },
        enumerable: false,
        configurable: true
    });
    return Timer;
}());
var durationInput = document.querySelector('#duration');
var startButton = document.querySelector('#start');
var pauseButton = document.querySelector('#pause');
var timer = new Timer(durationInput, startButton, pauseButton, {
    onStart: function () {
        console.log('onStart');
    },
    onTick: function () {
    },
    onComplete: function () {
    },
});
