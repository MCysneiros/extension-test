function sendHello() {
	return new Promise((resolve) => {
		chrome.runtime.sendMessage({ type: 'openWindow' })

		chrome.runtime.onMessage.addListener(function listener(message) {
			if (message === 'hello world') {
				chrome.runtime.onMessage.removeListener(listener)
				resolve(message)
			}
		})
	})
}

window.sendHello = sendHello
