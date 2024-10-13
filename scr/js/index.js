const selectionColorList = document.querySelectorAll(".cards");

selectionColorList.forEach(cards => {
    cards.addEventListener("click", () => {

        const selectedColorCard = document.querySelector(".open");
        selectedColorCard.classList.remove("open");

        const idSelectedColor = cards.attributes.id.value;
        const idColorCardToOpen = "card-" + idSelectedColor;
        const colorCardToOpen = document.getElementById(idColorCardToOpen);
        colorCardToOpen.classList.add("open");
        
        const colorActiveInListing = document.querySelector(".active");
        colorActiveInListing.classList.remove("active");

        const colorSelectedInListing = document.getElementById(idSelectedColor);
        colorSelectedInListing.classList.add("active")
    })
})