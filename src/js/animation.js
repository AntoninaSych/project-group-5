const element = document.querySelector('.animation');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'proposal__box', entries[0].isIntersecting );
});

observer.observe( element );