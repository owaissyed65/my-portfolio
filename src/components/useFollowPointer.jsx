import { useState, useEffect } from "react";

export const useFollowPointer = (ref) => {
    const [point, setPoint] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }) => {

            const element = ref.current;
            const x = clientX - element.offsetLeft - element.offsetWidth / 2;
            const y = clientY - element.offsetTop - element.offsetHeight / 2;
            // console.log(x)
            setPoint({ x, y });
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () =>
            window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return point;
};
export const useFellorHirePointer = (ref) => {
    const [point, setPoint] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const handlePointerMove = ({ clientX, clientY }) => {
            // console.log(clientX,clientY)
            const element = ref.current;
            const x = clientX - (element.offsetLeft) - element.offsetWidth - 435
            const y = clientY - element.offsetTop - element.offsetHeight - 50;
            console.log(y)
            if (x > 220 && y && 250 ) {
                return;
            }
            setPoint({ x: x, y: y })
        }

        window.addEventListener("pointermove", handlePointerMove);
        return () =>
            window.removeEventListener("pointermove", handlePointerMove);
    }, [])
    return point
}