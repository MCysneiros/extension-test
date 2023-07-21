function sendHello() {
	return new Promise(resolve => {
		chrome.runtime.sendMessage({ type: 'openWindow' });

		chrome.runtime.onMessage.addListener(function listener(message) {
			if (message === 'hello world') {
				chrome.runtime.onMessage.removeListener(listener);
				resolve(message);
			}
		});
	});
}

window.sendHello = sendHello;

async function test() {
	return new Promise(resolve => {
		console.log('test');
		window.addEventListener('message', async function (event) {
			console.log(event);
		});
	});
}

window.test = test;
