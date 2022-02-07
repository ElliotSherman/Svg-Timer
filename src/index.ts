
const durationInput = document.querySelector('#duration') as HTMLInputElement ;
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton , pauseButton , {
    onStart(){
        console.log('onStart');
    },
    onTick(){
        console.log('ticked down');
        
    },
    onComplete(){
        console.log('completed countdown');
    },
});