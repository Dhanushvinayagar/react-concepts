import { useCallback, useState } from 'react'
import { throttleFn } from './throttle';
import { debounceFn } from './debounce';

const DebounceVsThrottle = () => {

    const [debounceValue, setDebounceValue] = useState('');
    const [throttleValue, setThrottleValue] = useState('');

    const handleDebounceChange = (e:any) => {
        setDebounceValue(e.target?.value)
    }

    const handleThrottleChange = (e:any) => {
        setThrottleValue(e.target?.value)
    }

    const debounceChange = useCallback(debounceFn(handleDebounceChange,300),[])
    const throttleChange = useCallback(throttleFn(handleThrottleChange,1000),[])


    return (
        <>
            <div>
                <p>Debounce:{debounceValue}</p>
                <input onChange={debounceChange} />
            </div>
            <div>
                <p>Throttle:{throttleValue}</p>
                <input onChange={throttleChange} />
            </div>
        </>
    )
}

export default DebounceVsThrottle