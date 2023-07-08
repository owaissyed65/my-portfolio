import { useEffect } from "react";
import { useState } from "react";

export const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
};
export const topScroll = () => {

    const [scrollUp, setScrollUp] = useState(false)
    useEffect(() => {
        const scrollHandler = (e) => {

            if (window.scrollY > 100) {
                setScrollUp(true)
            } else {
                setScrollUp(false)
            }
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])
    return scrollUp
}