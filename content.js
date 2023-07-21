// Injeta a função sendHello na página após o carregamento completo (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function () {
	console.log('foi huehue')
	const container = document.head || document.documentElement
	if (!container) return

	const scriptTag = document.createElement('script')
	scriptTag.async = false
	scriptTag.type = 'text/javascript'
	scriptTag.src = chrome.runtime.getURL('inject.js')
	scriptTag.onload = () => {
		container.removeChild(scriptTag)
	}

	container.insertBefore(scriptTag, container.children[0])
})
