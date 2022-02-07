declare class Timer {
    durationInput: HTMLInputElement;
    startBtn: Element;
    pauseBtn: Element;
    interval: number;
    constructor(durationInput: HTMLInputElement, startBtn: Element, pauseBtn: Element);
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
