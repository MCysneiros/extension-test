chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.type === 'openWindow') {
		chrome.windows.create({
			url: 'window.html',
			type: 'popup',
			width: 300,
			height: 200,
		});
	}
});

let portsKlv;

function connected(p) {
	portsKlv = p;

	portsKlv.postMessage({ greeting: 'hello from background script' });

	portsKlv.onMessage.addListener(function (msg) {
		console.log(msg);
		console.log(msg.greeting);
		console.log('background script');
	});
}

chrome.runtime.onConnect.addListener(connected);
