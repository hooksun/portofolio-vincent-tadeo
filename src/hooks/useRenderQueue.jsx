import { useEffect, useState } from "react";

export default function useRenderQueue(){
    const [queueArray, setQueueArray] = useState()
    const [state, setState] = useState()

    useEffect(() => {
        if(queueArray != null)
            setState(0)
    }, [queueArray])

    useEffect(() => {
        if(state == null || queueArray == null || state >= queueArray.length){
            return
        }

        queueArray[state]()
        setState(i => ++i)
    }, [state])

    return setQueueArray
}