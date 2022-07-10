let active = false
let currentState = ''
let hiddenState = ''

function triggerMasks(toggle = true) {
    if (toggle) {
        active = !active
    }

    body = document.getElementsByTagName('body')
    body[0].classList.toggle('twitter-anonymizer', active)
    toggleAtTexts(active)
    toggleState()

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

function toggleState() {
    if (active === true) {
        state = window.location.href
        if (hiddenState != state) {
            currentState = state
        }
        if (state != hiddenState) {
            window.history.pushState({ page: "" }, " page", "/anonymizer_user");
            hiddenState = window.location.href
        }
    } else {
        if (currentState !== '') {
            window.history.pushState({ page: "" }, "", currentState)
        }
        currentState = ''
    }
}

let observer = new MutationObserver(mutations => {
    triggerMasks(false)
});
observer.observe(document, { childList: true, subtree: true });