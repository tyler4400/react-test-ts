import React, {useEffect, useState} from 'react';
import useMousePosition from "../hooks/useMousePosition";

const LikeButton: React.FC = () => {
	const [like, setLike] = useState(0);
	const [on, setOn] = useState(true);
	const positions = useMousePosition()

	useEffect(() => {
		console.log('effect');
		document.title = `点击了${like}次`;
		return () => {
			console.log('clean up');
		}
	}, [like]);
	return (
		<>
			<h2>X: {positions.x}, Y : {positions.y}</h2>
			<button onClick={() => setLike(like + 1)}>
				{like} 👍
			</button>
			<button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
		</>

	)
};

export default LikeButton;
