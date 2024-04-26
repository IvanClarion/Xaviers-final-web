const initSlider1 = () => {
    const gridContainer = document.querySelector(".imageItems .gridcontainer");
    const prevButton = document.querySelector("#prev-slide");
    const nextButton = document.querySelector("#next-slide");

    prevButton.addEventListener("click", () => {
        const scrollAmount = gridContainer.clientWidth; // Positive scroll amount for scrolling left
        gridContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        const scrollAmount = gridContainer.clientWidth; // Positive scroll amount for scrolling right
        gridContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}

window.addEventListener("load", initSlider1);
