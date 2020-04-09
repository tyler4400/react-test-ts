import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from "./components/LikeButton";
// import withLoader from './components/withLoader';
import useURLLoader from "./hooks/useURLLoader";
interface IShowResult {
	message: string,
	status: string
}
// const DogShow: React.FC<{data: IShowResult}> = ({data}) => {
// 	return(
// 		<>
// 			<h2>DOG SHOW-:{data.status}</h2>
// 			<img src={data.message} alt=""/>
// 		</>
// 	)
// }

function WrappedDogShow(){
	const [ show, setShow ] = useState(true)
	const [dogResult, loading] = useURLLoader<IShowResult>('https://dog.ceo/api/breeds/image/random', [show]);
	return(
		<>
			<p>
				<button onClick={() => {setShow(!show)}}>Refresh 🐶 photo</button>
			</p>
			{ loading ? <p>🐶 读取中</p> : <img src={dogResult && dogResult.message} />}
		</>
	)
}

function App(){
	// const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
	return (
		<div className="App">
			<header className="App-header">
				<Hello message={'Hello Typescript'}/>
				<LikeButton/>
				<WrappedDogShow />
			</header>
		</div>
	);
}

export default App;
