(function () {
  let intro = document.querySelector('.intro');
  if (intro) {
    intro.querySelector('.intro__range-track').addEventListener('input', function () {
      this.style = 'background:linear-gradient(to right, #1146A6 0%, #1146A6 ' + this.value + '%, #fff ' + this.value + '%, white 100%)';
    });
  }
})();