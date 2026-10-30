chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyBoothId",
    title: "Copy Booth ID",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copyBoothId") {
    const url = info.linkUrl;

    const match = url.match(/\/items\/(\d+)/);

    if (match && tab?.id) {
      const itemId = match[1];

      // execute content script
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (id) => {
          navigator.clipboard.writeText(id)
            .catch(() => alert("Copy failed"));
        },
        args: [itemId]
      });
    }
  }
});
