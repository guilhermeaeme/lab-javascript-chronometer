// Constructor
function Chronometer() {
	this.currentTime = 0,
	this.intervalId = null,
	this.milIntervalId = null,
	this.minutes = '00',
	this.seconds = '00',
	this.milliseconds = '00',
	this.currentMilliseconds = 0;

	this.startClick = function() {
		var that = this;
		this.intervalId = setInterval(function(){
			that.currentTime += 1;
			that.setTime();

			if(document.getElementById('minDec')) {
				printTime();
			}
		}, 1000);

		this.milIntervalId = setInterval(function(){
			that.currentMilliseconds += 1;

			if(that.currentMilliseconds > 99) {
				that.currentMilliseconds = 0;
			}

			that.setTime();

			if(document.getElementById('minDec')) {
				printTime();
			}
		}, 10);
	},

	this.setMinutes = function() {
		return Math.floor(this.currentTime / 60);
	},

	this.setSeconds = function() {
		return Math.floor(this.currentTime - (this.setMinutes() * 60));
	},

	this.setMilliseconds = function() {
		return this.currentMilliseconds;
	},

	this.twoDigitsNumber = function(value) {
		var twoDigits = '00' + value;
		return twoDigits.substr(twoDigits.length - 2, 2);
	},

	this.setTime = function() {
		this.minutes = this.twoDigitsNumber(this.setMinutes())
		this.seconds = this.twoDigitsNumber(this.setSeconds());
		this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
	},

	this.stopClick = function() {
		clearInterval(this.intervalId);
		clearInterval(this.milIntervalId);
		this.intervalId = null;
	},

	this.resetClick = function() {
		this.currentTime = 0;
		this.currentMilliseconds = 0;
		this.setTime();
	}
}

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
