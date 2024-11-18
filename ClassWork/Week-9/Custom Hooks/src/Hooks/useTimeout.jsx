import { useEffect } from "react";

export default function useTimeout(fn, timout)    {
    useEffect(()=>  {
        const id = setInterval(fn, timout);

        return ()=>   {
            clearTimeout(id);
        }
    },[])
}