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

interface IThemeProps {
	[key: string]: { color: string, background: string }
}

const themes: IThemeProps = {
	'light': {
		color: '#000',
		background: '#eee'
	},
	'dark': {
		color: '#fff',
		background: '#282c34'
	}
}
export const ThemeCtx = React.createContext(themes.light);

function WrappedDogShow(){
	const [show, setShow] = useState(true)
	const [dogResult, loading] = useURLLoader<IShowResult>('https://dog.ceo/api/breeds/image/random', [show]);
	return (
		<>
			<p>
				<button onClick={() => {
					setShow(!show)
				}}>Refresh 🐶 photo
				</button>
			</p>
			{loading ? <p>🐶 读取中</p> : <img src={dogResult && dogResult.message}/>}
		</>
	)
}

function App(){
	let [theme, setTheme] = useState(themes.light);
	function changeTheme(){
		if (theme.color === themes.light.color) {
			setTheme(themes.dark);
		} else {
			setTheme(themes.light);
		}
	}

	// const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
	return (
		<div className="App">
			<ThemeCtx.Provider value={theme}>
				<header className="App-header" style={theme}>
					<button onClick={changeTheme}>change global theme</button>
					<Hello message={'Hello Typescript'}/>
					<LikeButton/>
					<WrappedDogShow/>
				</header>
			</ThemeCtx.Provider>V
		</div>
	);
}

export default App;
