
window.onload = function() {
  Particles.init({
    selector: '.header__background',
    color: '#289F07',
    speed:.125,
    maxParticles: 110,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 60
        }
      }, {
        breakpoint: 375,
        options: {
          maxParticles: 40
        }
      }
    ]
  });
};
