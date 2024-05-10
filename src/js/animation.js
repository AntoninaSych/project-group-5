const element = document.querySelector('.proposal__box');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'animation-degree-9', entries[0].isIntersecting );
  element.classList.toggle( 'animation-degree-11', entries[0].isIntersecting );
});

observer.observe( element );