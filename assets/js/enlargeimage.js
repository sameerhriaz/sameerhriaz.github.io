function enlargeImage(img) {
    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the image and insert it inside the modal - use its "src" attribute as the src for the modal image
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
  