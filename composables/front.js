import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useCursor = () => useState("use_cursor", () => null);
export const useGsapAnimationOpacity = (arr, triggerEl, startMarker) => {
  gsap.registerPlugin(ScrollTrigger);

  if (!Array.isArray(arr)) {
    return;
  }
  arr.forEach((el, idx) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: triggerEl,
        start: `top ${startMarker ? "95%" : "80%"}`,
        markers: false,
      },

      delay: 0,
      opacity: 1,
      ease: "none",
      duration: 1,
    });
  });
};
