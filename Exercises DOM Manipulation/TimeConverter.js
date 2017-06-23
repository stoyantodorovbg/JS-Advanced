/**
 * Created by Stoyan on 22.6.2017 г..
 */
function attachEventsListeners() {
    let divs = document.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].children[divs[i].children.length - 1].addEventListener('click', convert);
    }

    function convert() {
        let parent = this.parentNode;
        if (parent.children[1].id == 'days') {
            for (let i = 0; i < divs.length; i++) {
                if (divs[i].children[1].id === 'hours') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) * 24;
                } else if (divs[i].children[1].id === 'minutes') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) * 24 * 60;
                } else if (divs[i].children[1].id === 'seconds') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) * 24 * 60 * 60;
                }
            }
        } else if (parent.children[1].id === 'hours') {
            for (let i = 0; i < divs.length; i++) {
                if (divs[i].children[1].id === 'days') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) / 24;
                } else if (divs[i].children[1].id === 'minutes') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) * 60;
                } else if (divs[i].children[1].id === 'seconds') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) * 60 * 60;
                }
            }
        } else if (parent.children[1].id === 'minutes') {
            for (let i = 0; i < divs.length; i++) {
                if (divs[i].children[1].id === 'days') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) / 24 / 60;
                } else if (divs[i].children[1].id === 'hours') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) / 60;
                } else if (divs[i].children[1].id === 'seconds') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) * 60;
                }
            }
        } else if (parent.children[1].id === 'seconds') {
            for (let i = 0; i < divs.length; i++) {
                if (divs[i].children[1].id === 'days') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) / 24 / 60 / 60 ;
                } else if (divs[i].children[1].id === 'hours') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) / 60 / 60;
                } else if (divs[i].children[1].id === 'minutes') {
                    let element = divs[i].children[1];
                    element.value = Number(parent.children[1].value) / 60;
                }
            }
        }
    }
}

