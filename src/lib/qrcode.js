/**
 *
 * @param {HTMLElement} node
 * @param {import('styled-qr-code').Options} options
 */
export const qrcode = (node, options) => {
	/** @type {import('styled-qr-code').default} */
	let QRCodeStyling;

	// When create this library
	// svelte action doest not support reactive for action with promise.
	// so we need do like this
	const createQrCode = async (_options) => {
		if (!QRCodeStyling) {
			QRCodeStyling = new (await import('styled-qr-code')).default(_options);
			QRCodeStyling.append(node);
		}
		QRCodeStyling.update(_options);
	};
	createQrCode(options);

	return {
		update(/** @type {import('styled-qr-code').Options} */ options) {
			createQrCode(options);
		}
	};
};
