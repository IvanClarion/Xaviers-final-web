document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    
    // Get the form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const message = formData.get('message');
    
    // Create HTML elements for the new review
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container'); // Apply review-container class

    const reviewDisplay = document.createElement('div');
    reviewDisplay.classList.add('review-display'); // Apply review-display class

    const img = document.createElement('img');
    img.src = 'icons/businesswoman.png';
    img.classList.add('review-img'); // Apply review-img class

    const nameHeading = document.createElement('h1');
    nameHeading.classList.add('review-text', 'b'); // Apply review-text and b classes
    nameHeading.textContent = name;

    reviewDisplay.appendChild(img);
    reviewDisplay.appendChild(nameHeading);

    const reviewTextAlign = document.createElement('div');
    reviewTextAlign.classList.add('review-text-align'); // Apply review-text-align class

    const hr = document.createElement('hr');
    hr.classList.add('review-line'); // Apply review-line class

    const messageParagraph = document.createElement('p');
    messageParagraph.classList.add('review-text2', 'b'); // Apply review-text2 and b classes
    messageParagraph.textContent = message;

    reviewTextAlign.appendChild(hr);
    reviewTextAlign.appendChild(messageParagraph);

    reviewContainer.appendChild(reviewDisplay);
    reviewContainer.appendChild(reviewTextAlign);

    const reviewSection = document.getElementById('reviewSection');
    reviewSection.appendChild(reviewContainer);

    // Reset the form after submission
    this.reset();
  });
});
