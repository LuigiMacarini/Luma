import { useEffect, useRef, useState } from "react";

/**
 * Anima um valor numerico de 0 ate `end` quando `start` vira true.
 * Retorna o valor atual para renderizar o contador.
 */
export function useCountUp(end: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const frame = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [end, start, duration]);

  return value;
}
