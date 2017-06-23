/**
 * Created by Stoyan on 22.6.2017 г..
 */
function  toggle() {
    let button = document.getElementsByClassName('button');
    button = button[0];
    let more = document.getElementById('extra');
    if (button.textContent == 'More') {
        more.style.display = 'block';
        button.textContent = 'Less';
    } else {
        button.textContent = 'More';
        more.style.display = 'none';
    }
}