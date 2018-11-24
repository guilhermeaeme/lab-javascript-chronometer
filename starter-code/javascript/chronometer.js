// Constructor
function Chronometer() {
	this.currentTime = 0,
	this.intervalId = null,

	this.startClick = function() {
		var that = this;
		this.intervalId = setInterval(function(){
			that.currentTime += 1;
			that.setTime();
		}, 1000);
	},

	this.setMinutes = function() {
		return Math.floor(this.currentTime / 60);
	},

	this.setSeconds = function() {
		return this.currentTime - (this.setMinutes() * 60);
	},

	this.twoDigitsNumber = function(value) {
		var twoDigits = '00' + value;
		return twoDigits.substr(twoDigits.length - 2, 2);
	},

	this.setTime = function() {
		this.minutes = this.twoDigitsNumber(this.setMinutes())
		this.seconds = this.twoDigitsNumber(this.setSeconds());
	},

	this.stopClick = function() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	},

	this.resetClick = function() {
		this.currentTime = 0;
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
