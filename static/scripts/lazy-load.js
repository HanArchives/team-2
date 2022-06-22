document.addEventListener('DOMContentLoaded', function () {
  const lazyloadImages = document.querySelectorAll('img.lazy');
  let lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      // cancels timeout
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      //pageYOffset is an alias for scrollY;
      //it returns the number of pixels the document
      //is currently scrolled along the vertical axis
      const scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener('scroll', lazyload);
        window.removeEventListener('resize', lazyload);
        window.removeEventListener('orientationChange', lazyload);
      }
    }, 20);
  }

  document.addEventListener('scroll', lazyload);
  window.addEventListener('resize', lazyload);
  window.addEventListener('orientationChange', lazyload);
});

//When scrolling, the scroll event triggers multiple times rapidly.
//For performance, it adds a small timeout to the script that
//throttles the lazy loading function execution so it doesn’t block other
//tasks running in the same thread in the browser.
