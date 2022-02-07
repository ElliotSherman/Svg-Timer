declare class Timer {
    durationInput: HTMLInputElement;
    startBtn: Element;
    pauseBtn: Element;
    interval: number;
    onStart: CallableFunction;
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
declare const durationInput: HTMLInputElement;
declare const startButton: Element;
declare const pauseButton: Element;
declare const timer: Timer;
