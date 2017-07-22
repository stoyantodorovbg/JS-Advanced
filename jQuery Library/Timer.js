/**
 * Created by Stoyan on 27.6.2017 г..
 */
function timer() {
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    startBtn.on('click', startTimer);
    stopBtn.on('click', stopTimer);

    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');

    let timer = null;
    let time = 0;

    function startTimer() {
        startBtn.off('click', startTimer);
            timer = setInterval(step, 1000);

    }
    
    function stopTimer() {
        startBtn.on('click', startTimer);
        clearInterval(timer);
    }

    function step() {
        time++;
        $(hours).text(('0' + Math.trunc((time / 60) / 60)).slice(-2));
        $(minutes).text(('0' + Math.trunc(time / 60) % 60).slice(-2));
        $(seconds).text(('0' + (time % 60)).slice(-2));
    }

}

