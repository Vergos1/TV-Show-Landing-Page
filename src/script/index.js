document.addEventListener('DOMContentLoaded', (event) => {
  const trendingSlider = new Swiper('.trending__slider', {
    slidesPerView: window.innerWidth <= 600 ? 2 : 4,
    spaceBetween: 10,
    simulateTouch: window.innerWidth <= 741,
    touchRatio: 1,
  });
});
// swiper init

let lastWidth = window.innerWidth;

window.onresize = function () {
  const breakpoints = [601, 741, 992];
  const currentWidth = window.innerWidth;
  for (let i = 0; i < breakpoints.length; i++) {
    if ((lastWidth < breakpoints[i] && currentWidth >= breakpoints[i]) ||
     (lastWidth >= breakpoints[i] && currentWidth < breakpoints[i])) {
      lastWidth = currentWidth;
      location.reload();
      break;
    }
  }
};
// oversize auto reload