/**
 * Created by Stoyan on 21.6.2017 г..
 */
function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', checkChange);


    function checkChange() {
        if (!this.value.match(/^[a-z]+@[a-z]+\.[a-z]+$/)) {
            email.className = 'error';
        }else {
            email.removeAttribute('class');
        }
    }
}
