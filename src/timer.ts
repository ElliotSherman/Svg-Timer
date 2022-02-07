class Timer{
    durationInput: HTMLInputElement;
    startBtn: Element;
    pauseBtn: Element;
    interval: number;
    onStart: CallableFunction;
    onTick:CallableFunction;
    onComplete:CallableFunction;
    constructor(durationInput: HTMLInputElement , 
                startBtn: Element , 
                pauseBtn: Element , 
                callbacks?:{
                    onStart:CallableFunction,
                    onTick:CallableFunction,
                    onComplete:CallableFunction,
                }){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    };
    start = () => {
        if(this.onStart){
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };
    pause= () => {
        clearInterval(this.interval)
        console.log('paused');
    }
    tick = ()=>{
        if(this.timeRemaining <= 0 ){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
        this.timeRemaining = this.timeRemaining - 1;
        if(this.onTick){
            this.onTick();
        }
        }
    }
    get timeRemaining():number{
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toString();
    }
}