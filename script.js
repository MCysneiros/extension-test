document.addEventListener('DOMContentLoaded', function () {
	document
		.getElementById('connect')
		.addEventListener('click', async function () {
			const tabs = await chrome.tabs.query({ active: true });

			tabs.forEach(tab => {
				console.log(tab);
				chrome.tabs.sendMessage(
					tab.id,
					{ greeting: 'hello from popup' },
					function (response) {
						console.log(response);
					}
				);
			});
		});
});
