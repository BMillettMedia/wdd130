function updateArrowPosition() {
    const slides = document.getElementsByClassName("mySlides");
    const prevArrow = document.querySelector(".prev");
    const nextArrow = document.querySelector(".next");
  
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].style.display === "block") {
        const img = slides[i].querySelector("img");
        const imgHeight = img.offsetHeight; // Get the height of the current image
  
        // Dynamically set the arrows' position based on the image height
        prevArrow.style.top = `${imgHeight / 2}px`;
        nextArrow.style.top = `${imgHeight / 2}px`;
        break;
      }
    }
  }
  
  // Update the arrow position whenever the slide changes
  function plusSlides(n) {
    showSlides(slideIndex += n);
    updateArrowPosition();
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
    updateArrowPosition();
  }
  
  // Show slides and initialize
  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  
    // Call arrow update when a slide is shown
    updateArrowPosition();
  }
  
  // Initialize slideshow and arrow positions
  let slideIndex = 1;
  showSlides(slideIndex);
  window.addEventListener("resize", updateArrowPosition); // Adjust on window resize
  