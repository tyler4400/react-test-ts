import React, {useEffect, useState} from 'react';

const LikeButton: React.FC = () => {
	const [like, setLike] = useState(0);
	const [on, setOn] = useState(true);

	useEffect(() => {
		console.log('effect');
		document.title = `点击了${like}次`;
		return () => {
			console.log('clean up');
		}
	}, [like]);
	return (
		<div>
			<button onClick={() => setLike(like + 1)}>
				{like} 👍
			</button>
			<button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
		</div>

	)
};

export default LikeButton;
