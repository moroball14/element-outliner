chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "toggleOutliner",
    title: "Toggle Element Outliner",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "toggleOutliner") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
  }
});
