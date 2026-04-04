import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

// Throttle function
function throttle<T extends (...args: unknown[]) => void>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let last = 0;

    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn(...args);
        }
    };
}

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    // Toggle button visibility
    const toggleVisibility = useCallback(() => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, []);

    useEffect(() => {
        const throttledScroll = throttle(toggleVisibility, 200);

        window.addEventListener("scroll", throttledScroll);

        return () => {
            window.removeEventListener("scroll", throttledScroll);
        };
    }, [toggleVisibility]);

    // Click scroll
    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <a
            href="#"
            onClick={scrollToTop}
            className={`scroll-to-top ${visible ? "show" : ""}`}
        >
            <span className="scroll-to-top__wrapper">
                <span className="scroll-to-top__inner"></span>
            </span>
            <span className="scroll-to-top__text">Go Back Top</span>
        </a>
    );
};

export default ScrollToTop;