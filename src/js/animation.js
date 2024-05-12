window.addEventListener('load', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation')
      } else {
        entry.target.classList.remove('animation')
      }
    })
  }, {
    threshold: [0.3] // threshold: if 30% of the element is in the screen, we count it!
  })

  // list of elements to add animation class if they are in viewport
  const listElements = ['.proposal__box']

  // go through to add animation class in they are in viewport
  listElements.forEach(selector => {
    const element = document.querySelector(selector)

    if (element) {
      observer.observe(element)
    }
  })
})
