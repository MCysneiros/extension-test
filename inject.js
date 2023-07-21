async function sendHello() {
	return new Promise((resolve) => {
		chrome.windows.create(
			{
				url: 'window.html',
				type: 'popup',
				width: 300,
				height: 200,
			},
			function (window) {
				const windowId = window.id
				chrome.runtime.onMessage.addListener(function listener(message) {
					if (message === 'hello world') {
						chrome.runtime.onMessage.removeListener(listener)
						chrome.windows.remove(windowId)
						resolve(message)
					}
				})
			}
		)
	})
}

window.sendHello = sendHello
