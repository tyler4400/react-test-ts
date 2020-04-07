import React from "react";
import axios from 'axios';

interface ILaoderState {
	data: any,
	isLoading: boolean
}

interface ILoaderProps {
	data: any
}

const withLoader = <P extends ILaoderState>(WrappedComponent: React.ComponentType<P>, url: string) => {
	return class LoaderComponent extends React.Component<Partial<ILoaderProps>, ILaoderState> {
		constructor(props: any){
			super(props);
			this.state = {
				data: null,
				isLoading: false
			}
		}

		async componentDidMount(): Promise<void>{
			this.setState({isLoading: true});
			try{
			const {data} = await axios.get<{P: ILaoderState}>(url);
			this.setState({data, isLoading: false})
			}catch (e) {
				const data = {message: 'http://img2.sycdn.imooc.com/5978a5f700012ff808000600-140-140.jpg', status: 'loaded'};
				this.setState({data, isLoading: false})
			}
		}

		render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined{
			return (
				<>
					{(this.state.isLoading || !this.state.data) ? <p>data is loading</p> :
						<WrappedComponent {...this.props as P} data={this.state.data}/>}
				</>
			);
		}
	}
};
export default withLoader;
