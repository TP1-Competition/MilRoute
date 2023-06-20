import { useRef,useEffect } from "react";
  const IuseInterval=()=>{
    const useInterval = (callback, interval) => {
        const savedCallback = useRef(null);
        
        useEffect(() => {
          savedCallback.current = callback;
        });
      
        useEffect(() => {
          function tick() {
            if (savedCallback.current) {
              savedCallback.current();
            }
          }
      
          let id = setInterval(tick, interval);
          return () => clearInterval(id);
        }, [interval]);
      };
      return useInterval;
  }
  

  export default IuseInterval;