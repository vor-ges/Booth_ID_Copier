chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyBoothId",
    title: "BOOTHの商品IDをコピー",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copyBoothId") {
    const url = info.linkUrl;

    const match = url.match(/\/items\/(\d+)/);

    if (match && tab?.id) {
      const itemId = match[1];

      // content scriptを実行
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (id) => {
          navigator.clipboard.writeText(id)
            .catch(() => alert("コピー失敗"));
        },
        args: [itemId]
      });
    }
  }
});