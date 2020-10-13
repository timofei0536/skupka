import noUiSlider from 'nouislider';
if ( document.querySelector('#price') ) {
var stepsSlider = document.getElementById('price');

var input0 = document.getElementById('price1');
var input1 = document.getElementById('price2');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [20000, 80000],
    connect: true,
    range: {
        'min': [0],
        'max': 100000
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
});

}