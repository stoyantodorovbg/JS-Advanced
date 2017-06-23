/**
 * Created by Stoyan on 22.6.2017 г..
 */
function notify(message) {
    let note = document.getElementById('notification');
    note.textContent = message;
    note.style.display = 'block';
    setTimeout(counterSec, 2000)


    function counterSec() {
        note.style.display = 'none';
    }
}
