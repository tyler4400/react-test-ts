import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from "./components/LikeButton";

function App(){
	return (
		<div className="App">
			<header className="App-header">
				<Hello message={'Hello Typescript'}/>
				<LikeButton/>
			</header>
		</div>
	);
}

export default App;
