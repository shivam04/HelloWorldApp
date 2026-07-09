import { useState } from "react";

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounter = (initialValue: number = 0): UseCounterReturn => {
    const [count, setCount] = useState<number>(initialValue);

    const increment = () => {
        setCount(currentCountValue => currentCountValue + 1);
    };

    const decrement = () => {
        setCount(currentCountValue => currentCountValue - 1);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return {
        count,
        increment,
        decrement,
        reset
    }
}