//CODIGO PARA EVITAR EL TOUCH SCALE EN IOS 10
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);
