chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.message === 'hello world') {
		console.log(`Message received: ${message.message}`)
		// send message to popup.html
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, { message: message.message })
		})
		// send response to window
		sendResponse({ received: true })
	}
})
