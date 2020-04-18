import {useState, useEffect} from 'react';
import axios from "axios";

const useURLLoader = <T extends any>(url: string, deps: any[] = []): [T, boolean] => {
	// @ts-ignore
	const [data, setData] = useState<T>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios.get<T>(url).then(result => {
			setData(result.data);
		}).finally(() => setLoading(false));
	}, deps);
	return [data, loading];
}
export default useURLLoader;
