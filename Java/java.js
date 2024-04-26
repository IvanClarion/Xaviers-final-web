document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("new-button");
    var button;
    for (button = 0; button < acc.length; button++) {
        acc[button].addEventListener("click", function() {
            this.classList.toggle("active");
            var faqvis = this.parentElement.parentElement.nextElementSibling;
            faqvis.classList.toggle("active");
            if (faqvis.style.display === "block") {
                faqvis.style.display = "none";
            } else {
                faqvis.style.display = "block";
            }
        });
    }
});
