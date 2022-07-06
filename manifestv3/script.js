var active = false

var selectors = [
    {
        'selector': '[data-testid="tweet"] [data-testid="User-Names"]',
        'rounded': false,
    },
    {
        'selector': '[data-testid^=UserAvatar]',
        'rounded': true
    },
    {
        'selector': '[data-testid="tweet"] a span',   // a broad selector, needed for "in response to XXX" links
        'rounded': false
    }
]

function triggerMasks(toggle = true) {
    if (toggle) {
        active = !active
    }

    for (i = 0; i < selectors.length; i++) {
        elements = document.querySelectorAll(selectors[i].selector)
        for (j = 0; j < elements.length; j++) {
            elements[j].classList.toggle('twitter-anonymizer-anonymized', active);
            if (selectors[i].rounded === true) {
                elements[j].classList.toggle('twitter-anonymizer-anonymized-image', active);
            }
        }
    }
}

var observer = new MutationObserver(mutations => {
    triggerMasks(false)
});
observer.observe(document, { childList: true, subtree: true });