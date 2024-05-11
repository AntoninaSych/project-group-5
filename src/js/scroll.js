window.addEventListener('load', function() {
  const topElement = document.getElementById("header")
  const upButton = document.getElementById("up")

  upButton.onclick = () => {
    topElement.scrollIntoView({
      behavior: 'smooth',
    })
  }

  window.addEventListener("scroll", function() {
    const offsetTop = this.scrollY;

    if (offsetTop > 350) {
      upButton.classList.add('visible')
    } else {
      upButton.classList.remove('visible')
    }
  })
})
