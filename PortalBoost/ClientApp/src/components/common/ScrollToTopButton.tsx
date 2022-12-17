import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    //TODO: Optimize using intersection-observer instead of eventlistener
    useEffect(() => {
        const showScrollButton = () => {
            window.scrollY > 400 ? setShowButton(true) : setShowButton(false);
        }

        return () => { window.addEventListener("scroll", showScrollButton) };
    }, [])

    return (
        <button id="scroll-top-button" onClick={scrollToTop} title="Go To Top"
            className={`${showButton ? "fixed" : "hidden"} bottom-20 right-8
            border-0 w-10 h-10 md:w-14 md:h-14 rounded-full text-white text-5xl z-40 flex place-items-center`}><FiArrowUp></FiArrowUp></button>
    )
}

export default ScrollToTopButton