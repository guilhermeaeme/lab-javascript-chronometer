var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
	minDec.innerHTML = chronometer.minutes[0];
	minUni.innerHTML = chronometer.minutes[1];

	secDec.innerHTML = chronometer.seconds[0];
	secUni.innerHTML = chronometer.seconds[1];
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
	btnLeft.innerHTML = 'STOP';
	btnLeft.className = 'btn stop';
}

function setSplitBtn() {
	btnRight.innerHTML = 'SPLIT';
	btnRight.className = 'btn split';	
}

function setStartBtn() {
	btnLeft.innerHTML = 'START';
	btnLeft.className = 'btn start';
}

function setResetBtn() {
	btnRight.innerHTML = 'RESET';
	btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
	if(!chronometer.intervalId) {
		chronometer.startClick();
		setStopBtn();
		setSplitBtn();
	} else {
		chronometer.stopClick();
		setStartBtn();
		setResetBtn();
	}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
