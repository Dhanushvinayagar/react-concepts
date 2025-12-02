import { useRef, useState } from "react";

// Note: Don't do this - let interval: any ; 
// because outside component it will be used globally and it will create a new reference inside the component;

export default function useTimer() {

    const [timer, setTimer] = useState(new Date().toString());
    const interval = useRef<any>(null);

    const starttimer :any = () => {
        interval.current = setInterval(()=>{
            setTimer(new Date().toString());
        },1000)
    }

    const stoptimer:any = () => {
        clearInterval(interval.current);
    }

    return [timer,starttimer,stoptimer]
}