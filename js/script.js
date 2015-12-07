$(document).ready(function() {
        $('.tooltip').tooltipster();
});

$('#no').novacancy({
    'reblinkProbability': 0.1,
    'blinkMin': 0.01,
    'blinkMax': 0.2,
    'loopMin': 3,
    'loopMax': 10,
    'color': '#ffffff',
    'glow': ['0 0 100px #ffffff', '0 0 30px #f68067', '0 0 6px #0000ff'],
    'off': 1,
    'blink': 5,
    'classOn': 'on',
    'classOff': 'off',
    'autoOn': true
});
