/**
 * Created by Stoyan on 22.6.2017 г..
 */
function  create(sentences) {

    for (let sentence of sentences) {
        let element = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = sentence;
        p.style.display = 'none';
        element.addEventListener('click',
            function  showParagraph() {
                p.style.display = 'inline-block';
            });
        element.appendChild(p);
        let content = document.getElementById('content');
        content.appendChild(element);
    }
}
