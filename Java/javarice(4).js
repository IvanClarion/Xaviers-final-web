const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

// Add event listener for menu icon click
menuToggle.addEventListener('click', function() {
    // Toggle the display of the hidden navigation menu
    mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
});
