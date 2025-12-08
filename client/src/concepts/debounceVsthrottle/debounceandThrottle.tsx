import { useState , useRef } from "react";

export default function DebounceandThrottle() {
  const [c, setC] = useState(0);

  const t = useRef<any>(null)
  const t1 = useRef<any>(null)
  const l = useRef<any>(null)

  function debounce() {
    
    return function (delay=1000) {
      clearTimeout(t.current);
      t.current = setTimeout(() => {
        setC((prev) => prev + 1);
      }, delay);
    };
  }


  function throttle() {
   
    return function (delay:number) {
      if (!l.current) {
        l.current = true;
        setC((prev) => prev - 1);
        clearTimeout(t1.current);
        t1.current = setTimeout(() => {
          l.current = false;
        }, delay);
      }
    };
  }



  return (
    <div>
      <button onClick={() => throttle()(1500)}>-</button>
      {c}
      <button onClick={() => debounce()(1000)}>+</button>
    </div>
  );
}
