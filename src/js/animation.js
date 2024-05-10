const element = document.querySelector('.proposal-box-animation');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'proposal__box', entries[0].isIntersecting );
});

observer.observe( element );