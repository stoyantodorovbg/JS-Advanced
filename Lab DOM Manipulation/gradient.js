/**
 * Created by Stoyan on 21.6.2017 г..
 */
function attachGradientEvents() {
    let grad = document.getElementById('gradient');
    grad.addEventListener('mousemove', mouseIn);
    grad.addEventListener('mouseout', mouseOut);
    let result = document.getElementById('result');
    
    function mouseIn(event) {
        let x = event.offsetX;
        let percent = (x / this.clientWidth) * 100;
        result.textContent = Math.floor(percent) + '%';
    }
    
    function mouseOut() {
        result.textContent = 0 + '%';
    }
}
