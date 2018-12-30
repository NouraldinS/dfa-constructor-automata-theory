import React from 'react';

import './index.less';

const radianToDegrees = (angle) => angle * 180 / Math.PI;

const degreesToRadian = (angle) => angle * Math.PI / 180;

const getAngle = (opposite, adjacent) => {
	const angle = radianToDegrees(Math.atan(opposite / adjacent));
	if (adjacent < 0) return angle + 180;
	else if (opposite < 0) return angle + 360;
	else return angle;
};

const Transition = (props) => {
	const { end, endNode, startNode, width = 1024, states, text } = props;
	const _startNode = states && states.filter(({ id }) => id === startNode.id)[0];
	const _endNode = endNode && states.filter(({ id }) => id === endNode.id)[0];
	const { x: startX, y: startY } = _startNode.center;
	const { x: endX, y: endY } = _endNode && _endNode.center || end || {
		x: 0, y: 0
	};
	const selfLooping = _endNode && _startNode.id === _endNode.id;

	// Drwaing line
	const adjacent = endX - startX;
	const opposite = endY - startY;
	const hypotenuse = Math.sqrt(opposite ** 2 + adjacent ** 2);
	const theta = getAngle(opposite, adjacent);

	// Drawing line arrow
	const qtrXCoord = adjacent * 0.85 + startX;
	const qtrYCoord = opposite * 0.85 + startY;

	// Drawing text
	const txtXCoord = adjacent * 0.65 + startX;
	const txtYCoord = opposite * 0.65 + startY;
	const alpha = theta > 90 || theta < -90 ? 180 - theta : theta;

	return (
		<div className='transition'>
			<svg height={900} width={width}>
				{
					selfLooping ?
						<path d={`M${startX * width - 5},${startY * 900}
							C${startX * width - 80},${startY * 900 - 75}
							${startX * width + 85},${startY * 900 - 75}
							${startX * width + 5},${startY * 900}`}
						fill='transparent'
						style={{
							stroke: '#006b50', strokeWidth: 4
						}}
						/> :
						<React.Fragment>
							<line
								x1={startX * width}
								y1={startY * 900}
								x2={endX * width}
								y2={endY * 900}
								style={{
									stroke: '#006b50', strokeWidth: 4
								}}
							/>
							<polygon
								points={`
								${qtrXCoord * width},${qtrYCoord * 900}
								${qtrXCoord * width - 5},${qtrYCoord * 900 + 5}
								${qtrXCoord * width - 5},${qtrYCoord * 900 - 5}
								`}
								style={{
									stroke: 'rgb(0, 107, 80)',
									fill: 'rgb(0, 107, 80)',
									strokeWidth: 3,
									transform: `rotate(${theta}deg)`,
									transformOrigin: `${qtrXCoord * width}px ${qtrYCoord * 900}px`
								}}
							/>
						</React.Fragment>
				}
				<text
				 	x={selfLooping ? _startNode.center.x * width : txtXCoord * width}
				  y={selfLooping ? _startNode.center.y * 900 - 60 : txtYCoord * 900 + 15}
					style={{
						transform: `rotate(${theta}deg)`,
						transformOrigin: `${txtXCoord * width}px ${txtYCoord * 900}px`
					}}
				>
					{text}
				</text>
			</svg>
		</div>
	);
};

// <circle cx={qtrXCoord * width} cy={qtrYCoord * 900} r={5}/>
export default Transition;
