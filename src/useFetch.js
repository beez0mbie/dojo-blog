import {useState, useEffect} from 'react'

const useFecth = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(async() => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw Error('could not fetch data')
                }
                const resData = await response.json();
                setData(resData)
                setIsPending(false)
                setError(false)
            } catch (e) {
                setError(e.message)
                setIsPending(false)
            }}, 1000);
    },[url]);

    return {data, isPending, error}
}

export default useFecth;