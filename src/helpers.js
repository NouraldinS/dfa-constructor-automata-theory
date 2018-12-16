export const getCharacterAtIndex = (character, index) =>
	character
	+ `${index}`
		.split('')
		.map(digit => String.fromCharCode(8320 + parseInt(digit)))
		.join('');

export const getRelativeLeftAndTop = ({ clientX, clientY, target }) => ([
	clientX - target.getBoundingClientRect().x,
	clientY - target.getBoundingClientRect().y
]);
