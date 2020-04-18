import React, {useEffect, useState, useRef, useContext} from 'react';
import useMousePosition from "../hooks/useMousePosition";
import { ThemeCtx } from '../App'

const LikeButton: React.FC = () => {
	const [like, setLike] = useState(0);
	// const [on, setOn] = useState(true);
	const positions = useMousePosition()
	const likeRef = useRef<number>(like);
	const theme = useContext(ThemeCtx);
	const style = {
		background: theme.background,
		color: theme.color,
	}

	useEffect(() => {
		console.log('effect');
		document.title = `点击了${like}次`;
		return () => {
			console.log('clean up');
		}
	}, [like]);
	const handleLike = () =>{
		setLike(like + 1);
		likeRef.current++;
	}
	return (
		<>
			<h2>X: {positions.x}, Y : {positions.y}</h2>
			<button style={style} onClick={handleLike}>
				{like} 👍
			</button>
			<button onClick={() => setTimeout(() => alert(likeRef.current), 3000)}>likeRef</button>
		</>

	)
};

export default LikeButton;
