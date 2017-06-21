/**
 * Created by Stoyan on 21.6.2017 г..
 */
function focus() {
    let forms = document.getElementsByTagName('input');
    Array.from(forms).forEach(x => {x.addEventListener('focus', getFocus)
    x.addEventListener('blur', unFocus)
    });


    function getFocus() {
        event.target.parentNode.className = 'focused';
    }
    
    function unFocus() {
        event.target.parentNode.removeAttribute('class');
    }
}