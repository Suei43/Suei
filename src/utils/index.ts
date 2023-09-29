export function getScrollDirection() {
  let lastScrollPosition = window.scrollY;
  let value = 0;

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition < lastScrollPosition) {
      value = 1;
    }
    lastScrollPosition = currentScrollPosition;
  });
  return value;
}
