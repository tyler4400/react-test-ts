import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from "./components/LikeButton";
import withLoader from './components/withLoader';

interface IShowResult {
	message: string,
	status: string
}
const DogShow: React.FC<{data: IShowResult}> = ({data}) => {
	return(
		<>
			<h2>DOG SHOW-:{data.status}</h2>
			<img src={data.message} alt=""/>
		</>
	)
}

function App(){
	const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
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
