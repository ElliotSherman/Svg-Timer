declare class Timer {
    durationInput: HTMLInputElement;
    startBtn: Element;
    pauseBtn: Element;
    interval: number;
    onStart: CallableFunction;
    onTick: CallableFunction;
    onComplete: CallableFunction;
    constructor(durationInput: HTMLInputElement, startBtn: Element, pauseBtn: Element, callbacks?: {
        onStart: CallableFunction;
        onTick: CallableFunction;
        onComplete: CallableFunction;
    });
    start: () => void;
    pause: () => void;
    tick: () => void;
    get timeRemaining(): number;
    set timeRemaining(time: number);
}
