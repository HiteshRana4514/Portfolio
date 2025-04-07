import {useState, useEffect} from "react"

const useResize = ()=>{
    const [isMObile, setIsMobile] = useState(false);

    useEffect(()=>{
        function handleResize(){
            if(window.innerWidth<=1024){
                setIsMobile(true);
            }
            else{
                setIsMobile(false);
            }
        }
        handleResize()
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener("resize", handleResize);
    },[])
    return isMObile
}

export default useResize