document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('sendMessageButton').addEventListener('click', function () {
		chrome.runtime.sendMessage({ message: 'hello world' })
	})
})
