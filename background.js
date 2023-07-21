chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message === 'hello world') {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, 'hello world')
		})
	}
})
