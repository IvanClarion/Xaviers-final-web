const initSlider3 = () => {
    const gridContainer3 = document.querySelector(".imageItems3 .gridcontainer3");
    const prevButton3 = document.querySelector("#prev-slide3");
    const nextButton3 = document.querySelector("#next-slide3");

    prevButton3.addEventListener("click", () => {
        const scrollAmount = gridContainer3.clientWidth; // Positive scroll amount for scrolling left
        gridContainer3.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton3.addEventListener("click", () => {
        const scrollAmount = gridContainer3.clientWidth; // Positive scroll amount for scrolling right
        gridContainer3.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}

window.addEventListener("load", initSlider3);
