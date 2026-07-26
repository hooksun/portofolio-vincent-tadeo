import { useEffect, useState } from "react";

export default function useRenderQueue() {
  const [queueArray, setQueueArray] = useState<[() => unknown]>();
  const [state, setState] = useState<number>();

  useEffect(() => {
    if (queueArray != null) setState(0);
  }, [queueArray]);

  useEffect(() => {
    if (state == null || queueArray == null || state >= queueArray.length) {
      return;
    }

    queueArray[state]();
    setState((i) => (i ?? 0) + 1);
  }, [state]);

  return setQueueArray;
}
