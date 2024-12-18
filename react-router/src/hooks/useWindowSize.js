import { useState  , useEffect } from "react";

const useWindowSize = () => {
    const [windowSize , setWindowSize] = useState({
        width: undefined ,
        height: undefined
        });


    useEffect(() => {
        const handleResize = ()=>{
            setWindowSize({
                width: window.innerWidth ,
                height: window.innerHeight
                });
        }

        handleResize()

        window.addEventListener("resiz" , handleResize)

        const cleanUp = () => {
            console.log("runs if a useEffect dep change")
            window.removeEventListener("resiz" , handleResize)
        }

        return cleanUp
    } , [])

    return windowSize
}

export default useWindowSize;