const initSlider2 = () => {
    const gridContainer2 = document.querySelector(".imageItems2 .gridcontainer2");
    const prevButton2 = document.querySelector("#prev-slide2");
    const nextButton2 = document.querySelector("#next-slide2");

    prevButton2.addEventListener("click", () => {
        const scrollAmount = gridContainer2.clientWidth; // Positive scroll amount for scrolling left
        gridContainer2.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton2.addEventListener("click", () => {
        const scrollAmount = gridContainer2.clientWidth; // Positive scroll amount for scrolling right
        gridContainer2.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}

window.addEventListener("load", initSlider2);
