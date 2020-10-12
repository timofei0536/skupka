import noUiSlider from 'nouislider';
var stepsSlider = document.getElementById('price');

var input0 = document.getElementById('price1');
var input1 = document.getElementById('price2');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [3000, 50000],
    connect: true,
    range: {
        'min': [0],
        'max': 100000
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle] + "$";
});
