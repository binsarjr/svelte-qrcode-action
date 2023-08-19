/**
 *
 * @param {HTMLElement} node
 * @param {import('styled-qr-code').Options} options
 */
export const qrcode = (node, options) => {
	let QRCodeStyling;

	// When create this library
	// svelte action doest not support reactive for action with promise.
	// so we need do like this
	const createQrCode = async (_options) => {
		if (!QRCodeStyling) {
			QRCodeStyling = (await import('styled-qr-code')).default;
		}
		const qrCode = new QRCodeStyling(_options);

		qrCode.append(node);
	};
	createQrCode(options);

	return {
		update(/** @type {import('styled-qr-code').Options} */ options) {
			node.innerHTML = '';
			createQrCode(options);
		}
	};
};
