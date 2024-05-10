const IntersectionObserverCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation')
    } else {
      entry.target.classList.remove('animation')
    }
  })
}

// threshold: if 20% of the element is in the screen, we count it!
// Can change the thresholds based on your needs. The default is 0 - it'll run only when the element first comes into view
const observer = new IntersectionObserver(IntersectionObserverCallback, {
  threshold: [0.2]
})

window.onload = () => {
  // list of elements to add animation class if they are in viewport
  ['.proposal__box'].forEach(selector => {
    const element = document.querySelector(selector)
    if (element) { 
      observer.observe(element) 
    }
  })
}
