var Timer = /** @class */ (function () {
    function Timer(durationInput, startBtn, pauseBtn, callbacks) {
        var _this = this;
        this.start = function () {
            if (_this.onStart) {
                _this.onStart(_this.timeRemaining);
            }
            _this.tick();
            _this.interval = setInterval(_this.tick, 50);
        };
        this.pause = function () {
            clearInterval(_this.interval);
            console.log('paused');
        };
        this.tick = function () {
            if (_this.timeRemaining <= 0) {
                _this.pause();
                if (_this.onComplete) {
                    _this.onComplete();
                }
            }
            else {
                _this.timeRemaining = _this.timeRemaining - 0.05;
                if (_this.onTick) {
                    _this.onTick(_this.timeRemaining);
                }
            }
        };
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
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
            this.durationInput.value = time.toFixed(2).toString();
        },
        enumerable: false,
        configurable: true
    });
    return Timer;
}());
