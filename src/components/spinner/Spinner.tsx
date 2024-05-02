import { useEffect } from "react"
import "./spinner.scss";
import { Loading } from 'notiflix/build/notiflix-loading-aio';


export const Spinner = () => {
    useEffect(() => {
        Loading.dots({
            svgColor: "#097ea5",
            backgroundColor: "rgba(0,0,0,0.4)"
        });
        return () => Loading.remove()
    }, [])
    return <></>
}