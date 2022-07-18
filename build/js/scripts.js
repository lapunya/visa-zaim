"use strict";

(function () {
  var form = document.querySelector('#intro-form');

  if (form) {
    var getRangeFillValue = function getRangeFillValue(value) {
      return 'background:linear-gradient(to right, #1146A6 0%, #1146A6 ' + value / 1000 + '%, #fff ' + value / 1000 + '%, white 100%)';
    };

    var range = form.querySelector('.intro__range-track');
    var output = form.querySelector('.intro__input--sum');
    output.value = range.value;
    range.value = output.value;
    range.style = getRangeFillValue(range.value);
    range.addEventListener('input', function () {
      this.style = getRangeFillValue(this.value);
      output.value = this.value;
    });
    output.addEventListener('input', function () {
      if (this.value < +this.min) {
        this.value = this.min;
      }

      if (this.value > +this.max) {
        this.value = this.max;
      }

      range.value = this.value;
      range.style = getRangeFillValue(this.value);
    });
  }
})();