
const durationInput = document.querySelector('#duration') as HTMLInputElement ;
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle')

const perimiter = parseFloat(circle.getAttribute('r'))*2*Math.PI;
circle.setAttribute('stroke-dasharray', `${perimiter}`);

let duration:number;
const timer = new Timer(durationInput, startButton , pauseButton , {
    onStart(totalDuration:number){
        duration = totalDuration;
        console.log('onStart');
    },
    onTick(timeRemaining:number){
        circle.setAttribute('stroke-dashoffset', 
        `${perimiter*timeRemaining/duration - perimiter}`
        );
    },
    onComplete(){
        console.log('completed countdown');
    },
});