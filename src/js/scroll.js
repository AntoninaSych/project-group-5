let scrollToTop = document.getElementById("up");

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
}

$("#up").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1);
  return false;
});
