document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('openWindowButton').addEventListener('click', function () {
		chrome.windows.create({
			url: 'window.html',
			type: 'popup',
			width: 300,
			height: 200,
		})
	})

	chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
		// show message in extension page
		var messageElement = document.createElement('p')
		messageElement.textContent = 'Message received: ' + message.message
		document.body.appendChild(messageElement)
	})
})
