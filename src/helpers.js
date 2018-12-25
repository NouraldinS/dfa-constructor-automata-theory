export const getCharacterAtIndex = (character, index) =>
	character
	+ `${index}`
		.split('')
		.map((digit) => String.fromCharCode(8320 + parseInt(digit)))
		.join('');

export const getRelativeLeftAndTop = ({ clientX, clientY, target }, margin = 0) => {
	const { x, y, width, height } = target.getBoundingClientRect();
	return ([
		// Top left corner coords
		(clientX - x - margin) / width,
		(clientY - y - margin) / height,
		// Center coords
		(clientX - x) / width,
		(clientY - y) / height,
		width
	]);
};

/**
	* @param {Number} x: relative (0<x<1) value for x axis
	* @param {Number} y: relative (0<y<1) value for y axis
	* @returns {String}: Text string for quarter
  */
export const getQuarter = (x, y) => {
	const inBottomOrLeft = x - y < 0;
	const inTopOrLeft = x + y < 1;
	if (inBottomOrLeft && inTopOrLeft) return 'left';
	if (!inBottomOrLeft && inTopOrLeft) return 'top';
	if (inBottomOrLeft && !inTopOrLeft) return 'bottom';
	return 'right';
};
