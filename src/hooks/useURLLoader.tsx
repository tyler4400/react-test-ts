import {useState, useEffect} from 'react';
import axios, {AxiosResponse} from "axios";

const useURLLoader = function <T>(url: string, deps: any[] = []): [T, boolean]{
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
