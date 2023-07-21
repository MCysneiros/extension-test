chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.type === 'openWindow') {
		chrome.windows.create({
			url: 'window.html',
			type: 'popup',
			width: 300,
			height: 200,
		})
	}
})
