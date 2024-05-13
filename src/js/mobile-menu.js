(() => {
  const mobileMenu = document.querySelector('.js-menu-container')
  const openMenuBtn = document.querySelector('.js-open-menu')
  const closeMenuBtn = document.querySelector('.js-close-menu')
  const menuLinks = document.querySelectorAll('.menu-link')

  const toggleMenu = (isOpen = true) => () => {
    openMenuBtn.setAttribute('aria-expanded', isOpen)

    if (isOpen) {
      mobileMenu.classList.add('is-open')
      document.body.style.overflow = 'hidden'
    } else {
      mobileMenu.classList.remove('is-open')
      document.body.style.overflow = 'auto'
    }
  }

  openMenuBtn.addEventListener('click', toggleMenu())
  closeMenuBtn.addEventListener('click', toggleMenu(false))
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', toggleMenu(false))
  })

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) {
      return
    }
    mobileMenu.classList.remove('is-open')
    openMenuBtn.setAttribute('aria-expanded', false)
  });
})();
