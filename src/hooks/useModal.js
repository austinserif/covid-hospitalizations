import { useState } from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    const open = () => {
        setIsShowing(true);
    }

    const close = () => {
        setIsShowing(false);
    }

    return [isShowing, open, close];
};

export default useModal;