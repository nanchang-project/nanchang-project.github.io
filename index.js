window.onload = () => {
    let howToDownloadRevealButtons = document.getElementsByClassName("btn-how-to-download");
    for (let i = 0; i < howToDownloadRevealButtons.length; i++) {
        howToDownloadRevealButtons[i].addEventListener("click", revealClickedDownloadMethod);
    }

    let displayScriptButton = document.getElementById("display-script-button");
    displayScriptButton.addEventListener("click", revealScriptOnClick);
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

function revealScriptOnClick() {
    const script = document.getElementById("script");
    script.classList.add("reveal");

    let scriptText = "";
    for (let i = 0; i < script.childNodes.length; i++) {
        console.log(script.childNodes[i]);

        if (script.childNodes[i].nodeName == "BUTTON") {
            continue;
        }
        else if (script.childNodes[i].innerText) {
            scriptText += script.childNodes[i].innerText;

        } else {
            scriptText += script.childNodes[i].nodeValue + '\n';
            
        }
    }

    console.log(scriptText);

    let copyScriptToClipboard = document.querySelector(".script-copy-button");
    copyScriptToClipboard.addEventListener("click", copyToClipboard(scriptText));
}

function copyToClipboard(scriptText) {
    navigator.clipboard.writeText(scriptText);
}