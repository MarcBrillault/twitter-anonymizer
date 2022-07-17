/* Create a context-menu */
chrome.contextMenus.create({
    id: "twitter-anonymization",   // <-- mandatory with event-pages
    title: "Toggle anonymization",
    contexts: ["all"],
    documentUrlPatterns: ["https://twitter.com/*", "https://mobile.twitter.com/*"]
});

/* Register a listener for the `onClicked` event */
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (tab) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => triggerMasks()
        });
    }
});