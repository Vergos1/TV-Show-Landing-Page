export function initializeBurgerMenu() {
  const burgerOpenButton = document.querySelector('#burger-open-button');
  const burgerMenu = document.querySelector('.header__burger-menu');
  const navLink = document.querySelectorAll('.header__burger-link');
  // search class and id

  console.log(burgerOpenButton);
  console.log(burgerMenu);
  console.log(navLink);
  // log

  burgerOpenButton.addEventListener("click", () => {
    burgerMenu.classList.toggle('open');
    if (burgerMenu.classList.contains('open')) {
      burgerMenu.classList.remove('closed');
      document.body.style.overflow = "hidden";
    } else {
      burgerMenu.classList.add('closed');
      document.body.style.overflow = "auto";
    }
  });
  // add event listener

  navLink.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('open');
      burgerMenu.classList.add('closed');
      document.body.style.overflow = "auto";
    })
  })
  // method foreach > add event listener
}


