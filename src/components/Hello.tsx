import React, {useContext} from 'react';
import { ThemeCtx } from "../App";

interface IHelloProps {
	message?: string
}

const Hello: React.FunctionComponent<IHelloProps> = props => {
	const theme = useContext(ThemeCtx);
	return (
		<h2 style={theme}>{props.message}</h2>
	)
};
Hello.defaultProps = {
	message: 'Hello World'
};

export default Hello;
