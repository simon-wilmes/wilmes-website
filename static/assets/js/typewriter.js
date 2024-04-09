let removeTime = 90;
let addTime = 150;
let waitTime = 1400;
let startTime = 1500;
let strings = ['Fun Ideas?', 'Theor. CS?', 'Right Here! '];

function removeText() {
    var currentString = getCurrentString().trimEnd();
    currentString = currentString.substring(0, currentString.length - 1);
    setCurrentString(currentString);
    if(currentString.length == 0) {
        clearInterval(window.removeInterval);
        window.removeInterval = null;
        window.goalString = strings.shift();
        window.addInterval = setInterval(addText, addTime);
    } 
}

function addText() {
    var currentLength = getCurrentString().length;
    setCurrentString(window.goalString.substring(0, currentLength + 1));
    if(currentLength + 1 == window.goalString.length) {
        clearInterval(window.addInterval)
        window.addInterval = null;
        if(strings.length > 0) {
            setTimeout(() => {
                window.removeInterval = setInterval(removeText, removeTime);
            }, waitTime);
        } else {
            $('.blinker').hide();
        }
        
    }
}

function getCurrentString() {
    var currentString = $('#typewriter-field')[0].childNodes[0].nodeValue;
    return currentString;
}
function setCurrentString(str) {
    $('#typewriter-field')[0].childNodes[0].nodeValue = str;
}

(function($) {

    $(window).on('load', function () {
        setTimeout(() => {
            window.removeInterval = setInterval(removeText, removeTime);
        }, waitTime + startTime);
    });

})(jQuery);