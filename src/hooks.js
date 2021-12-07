import { useState } from "react";

function useFlip(initial = true) {
    const [isFacingUp, setIsFacingUp] = useState(initial);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
      };

    return [isFacingUp, flipCard];
}

export { useFlip };