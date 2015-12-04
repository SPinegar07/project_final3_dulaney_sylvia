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

$(function() {
    var LocsA = [
    {
        lat: 33.8,
        lon: -84.3,
        map_div: #gmap,
        title: 'JJs Diner',
        html: '<h3>JJs Diner</h3>',
        icon: 'http://maps.google.com/mapfiles/markerA.png',
        animation: google.maps.Animation.DROP,
    }
});
