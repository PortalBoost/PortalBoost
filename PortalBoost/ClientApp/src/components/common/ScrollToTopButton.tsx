import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <button id="scroll-top-button" onClick={scrollToTop} title="Go To Top"
            className="fixed bottom-12 right-8
            border-0 w-16 h-16 rounded-full text-white text-5xl"><FiArrowUp></FiArrowUp></button>
    )
}

export default ScrollToTopButton