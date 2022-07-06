let active = false

function triggerMasks(toggle = true) {
    if (toggle) {
        active = !active
    }

    body = document.getElementsByTagName('body')
    body[0].classList.toggle('twitter-anonymizer', active)
    toggleAtTexts(active)

}

function toggleAtTexts(active = true) {
    elements = document.getElementsByTagName('span')
    for (i = 0; i < elements.length; i++) {
        text = elements[i].innerText
        if (text.substring(0, 1) === '@') {
            elements[i].classList.toggle('twitter-anonymizer-anonymized', active)
        }
    }
}


let observer = new MutationObserver(mutations => {
    triggerMasks(false)
});
observer.observe(document, { childList: true, subtree: true });