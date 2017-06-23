/**
 * Created by Stoyan on 23.6.2017 г..
 */
function attachEventsListeners() {
let button = document.getElementById('convert');
button.addEventListener('click', convert);

function convert() {
    let input = document.getElementById('inputUnits');
    let output = document.getElementById('outputUnits');
    let inputValue = document.getElementById('inputDistance')
    let result = document.getElementById('outputDistance');
    switch (input.value) {
        case 'km':
            switch (output.value) {
                case 'km':
                    result.value = inputValue.value;
                    break;
                case 'm':
                    result.value = Number(inputValue.value) * 1000;
                    break;
                case 'cm':
                    result.value = Number(inputValue.value) * 1000 * 100;
                    break;
                case 'mm':
                    result.value = Number(inputValue.value) * 1000 * 100 * 10;
                    break;
                case 'mi':
                    result.value = Number(inputValue.value) * 1000 / 1609.34 ;
                    break;
                case 'yrd':
                    result.value = Number(inputValue.value) * 1000 / 0.9144;
                    break;
                case 'ft':
                    result.value = Number(inputValue.value) * 1000 / 0.3048;
                    break;
                case 'in':
                    result.value = Number(inputValue.value) * 1000 / 0.0254;
                    break;
            }
            break;
        case 'm':
            switch (output.value) {
                case 'km':
                    result.value = Number(inputValue.value) / 1000;
                    break;
                case 'm':
                    result.value = inputValue.value;
                    break;
                case 'cm':
                    result.value = Number(inputValue.value) * 100;
                    break;
                case 'mm':
                    result.value = Number(inputValue.value) * 100 * 10;
                    break;
                case 'mi':
                    result.value = Number(inputValue.value) / 1609.34;
                    break;
                case 'yrd':
                    result.value = Number(inputValue.value) / 0.9144;
                    break;
                case 'ft':
                    result.value = Number(inputValue.value) / 0.3048;
                    break;
                case 'in':
                    result.value = Number(inputValue.value) / 0.0254;
                    break;
            }
            break;
        case 'cm':
            switch (output.value) {
                case 'km':
                    result.value = Number(inputValue.value) / 1000 / 100;
                    break;
                case 'm':
                    result.value = Number(inputValue.value) / 100;
                    break;
                case 'cm':
                    result.value = inputValue.value;
                    break;
                case 'mm':
                    result.value = Number(inputValue.value) * 10;
                    break;
                case 'mi':
                    result.value = Number(inputValue.value) / 100 / 1609.34;
                    break;
                case 'yrd':
                    result.value = Number(inputValue.value) / 100 / 0.9144;
                    break;
                case 'ft':
                    result.value = Number(inputValue.value) / 100 / 0.3048;
                    break;
                case 'in':
                    result.value = Number(inputValue.value) / 100 / 0.0254;
                    break;
            }
            break;
        case 'mm':
            switch (output.value) {
                case 'km':
                    result.value = Number(inputValue.value) / 1000 / 100 / 10;
                    break;
                case 'm':
                    result.value = Number(inputValue.value) / 100 / 10;
                    break;
                case 'cm':
                    result.value = Number(inputValue.value) / 10;
                    break;
                case 'mm':
                    result.value = inputValue.value;
                    break;
                case 'mi':
                    result.value = Number(inputValue.value) / 10 / 100  / 1609.34 ;
                    break;
                case 'yrd':
                    result.value = Number(inputValue.value) / 10 / 100 / 0.9144;
                    break;
                case 'ft':
                    result.value = Number(inputValue.value) / 10 / 100 / 0.3048;
                    break;
                case 'in':
                    result.value = Number(inputValue.value) / 10 / 100 / 0.0254;
                    break;
            }
            break;
        case 'mi':
            switch (output.value) {
                case 'km':
                    result.value = Number(inputValue.value) * 1609.34 / 1000 ;
                    break;
                case 'm':
                    result.value = Number(inputValue.value) * 1609.34;
                    break;
                case 'cm':
                    result.value = Number(inputValue.value) * 1609.34 * 100 ;
                    break;
                case 'mm':
                    result.value = Number(inputValue.value) * 1609.34 * 10 * 100 ;
                    break;
                case 'mi':
                    result.value = inputValue.value;
                    break;
                case 'yrd':
                    result.value = Number(inputValue.value) * 1609.34 / 0.9144;
                    break;
                case 'ft':
                    result.value = Number(inputValue.value) * 1609.34 / 0.3048 ;
                    break;
                case 'in':
                    result.value = Number(inputValue.value) * 1609.34 / 0.0254 ;
                    break;
            }
            break;
        case 'yrd':
            switch (output.value) {
                case 'km':
                    result.value = Number(inputValue.value) / 1000  * 0.9144;
                    break;
                case 'm':
                    result.value = Number(inputValue.value)  * 0.9144;
                    break;
                case 'cm':
                    result.value = Number(inputValue.value) * 100 * 0.9144 ;
                    break;
                case 'mm':
                    result.value = Number(inputValue.value) * 10 * 100 * 0.9144;
                    break;
                case 'mi':
                    result.value = Number(inputValue.value) * 0.9144 / 1609.34;
                    break;
                case 'yrd':
                    result.value = inputValue.value;
                    break;
                case 'ft':
                    result.value = Number(inputValue.value) * 0.9144 / 0.3048;
                    break;
                case 'in':
                    result.value = Number(inputValue.value) * 0.9144 / 0.0254;
                    break;
            }
            break;
        case 'ft':
            switch (output.value) {
                case 'km':
                    result.value = Number(inputValue.value) / 1000 *  0.3048;
                    break;
                case 'm':
                    result.value = Number(inputValue.value) * 0.3048;
                    break;
                case 'cm':
                    result.value = Number(inputValue.value) * 100 *  0.3048;
                    break;
                case 'mm':
                    result.value = Number(inputValue.value) * 10 * 100 *  0.3048;
                    break;
                case 'mi':
                    result.value = Number(inputValue.value) / 1609.34 *  0.3048;
                    break;
                case 'yrd':
                    result.value = Number(inputValue.value) *  0.3048 / 0.9144;
                    break;
                case 'ft':
                    result.value = inputValue.value;
                    break;
                case 'in':
                    result.value = Number(inputValue.value) * 0.3048 / 0.0254 ;
                    break;
            }
            break;
        case 'in':
            switch (output.value) {
                case 'km':
                    result.value = Number(inputValue.value) / 1000 * 0.0254 ;
                    break;
                case 'm':
                    result.value = Number(inputValue.value) * 0.0254 ;
                    break;
                case 'cm':
                    result.value = Number(inputValue.value) * 100 * 0.0254 ;
                    break;
                case 'mm':
                    result.value = Number(inputValue.value) * 10 * 100 * 0.0254 ;
                    break;
                case 'mi':
                    result.value = Number(inputValue.value) / 1609.34 * 0.0254;
                    break;
                case 'yrd':
                    result.value = Number(inputValue.value) * 0.0254 / 0.9144 ;
                    break;
                case 'ft':
                    result.value = Number(inputValue.value) * 0.0254 / 0.3048;
                    break;
                case 'in':
                    result.value = inputValue.value;
                    break;
            }
            break;
    }
}
}

