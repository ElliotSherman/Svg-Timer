
const durationInput = document.querySelector('#duration') as HTMLInputElement ;
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle')

const perimiter = parseFloat(circle.getAttribute('r'))*2*Math.PI;
circle.setAttribute('stroke-dasharray', `${perimiter}`);

let currentOffset:number = 0;

const timer = new Timer(durationInput, startButton , pauseButton , {
    onStart(){
        console.log('onStart');
    },
    onTick(){
        circle.setAttribute('stroke-dashoffset', `${currentOffset}`)
        currentOffset = currentOffset - 50
    },
    onComplete(){
        console.log('completed countdown');
    },
});