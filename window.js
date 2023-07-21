document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('confirmButton').addEventListener('click', function () {
		chrome.runtime.sendMessage('hello world')
	})
})
