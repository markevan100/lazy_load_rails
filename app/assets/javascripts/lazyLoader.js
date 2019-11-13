// Constants
let inAdvance = 100
let imagesCounter = 0;
let jsCounter = 0;

// Function for LazyLoading
function lazyLoad(imagesToLoad) {
  jsCounter += 1
  document.getElementById("jsCounter").innerHTML = `${jsCounter}`
  imagesToLoad.forEach(image => {
    if (!image.src.includes("asset")) {
      if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
        image.setAttribute('src', image.dataset.src)
        imagesCounter += 1;
      }
    }
  })
  document.getElementById("imageCounter").innerHTML = `${imagesCounter}`
}

// Function for Throttling
function actThenThrottleEvents(listener, delay) {
  let timeout;
  return function() {
    if (!timeout) {
      let lazyImages = [...document.querySelectorAll('.lazy-image')];
      listener(lazyImages);
      if (document.getElementById("throttle").checked) {
        timeout = setTimeout( function() { timeout = null },
        delay);
      }
    }
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [...document.querySelectorAll('.lazy-image')];
  if (lazyImages.length === 0) {
    document.getElementById("imageCounter").innerHTML = '11'
  } else {
    lazyLoad(lazyImages)
  }
});

window.onload = function(){
  setTimeout(function(){
    var loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    let loadSec = (loadTime / 1000).toFixed(2);
    document.getElementById("loadTime").innerHTML = `${loadSec} sec`;
  }, 0);
}

document.addEventListener("scroll",
  actThenThrottleEvents(lazyLoad, 500)
);
