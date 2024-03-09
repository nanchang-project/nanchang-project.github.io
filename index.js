window.onload = () => {
    let howToDownloadRevealButtons = document.getElementsByClassName("btn-how-to-download");
    for (let i = 0; i < howToDownloadRevealButtons.length; i++) {
        howToDownloadRevealButtons[i].addEventListener("click", revealClickedDownloadMethod)
    }
};

function revealClickedDownloadMethod(event) {
    // need to clear out all other displays
    let allMethods = document.getElementsByClassName("wrapper-download-from");
    for (let i = 0; i < allMethods.length; i++) {
        if (allMethods[i].classList.contains("reveal-method")) {
            allMethods[i].classList.remove("reveal-method");
        }
    }

    let methodToReveal = event.currentTarget.id;
    let elementToReveal = document.querySelector(`.${methodToReveal}`)
    elementToReveal.classList.add("reveal-method");
}