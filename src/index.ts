class Timer{
    durationInput: HTMLInputElement;
    startBtn: Element;
    pauseBtn: Element;
    interval: number;
    onStart: CallableFunction;
    constructor(durationInput: HTMLInputElement , 
                startBtn: Element , 
                pauseBtn: Element , 
                callbacks?:{onStart:CallableFunction,
                    onTick:CallableFunction,
                    onComplete:CallableFunction,
                }){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        if(callbacks){
            this.onStart = callbacks.onStart;
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
        }else{
        this.timeRemaining = this.timeRemaining - 1;
        }
    }
    get timeRemaining():number{
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toString();
    }
}

const durationInput = document.querySelector('#duration') as HTMLInputElement ;
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton , pauseButton , {
    onStart(){
        console.log('onStart');
    },
    onTick(){

    },
    onComplete(){

    },
});