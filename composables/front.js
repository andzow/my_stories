import { gsap } from "gsap";

export const useCursor = () => useState("use_cursor", () => null);
export const useGsapAnimationOpacity = (arr) => {
  arr.forEach((el, idx) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: ".collection",
        start: "top 80%",
        markers: false,
      },
      delay: idx * 0.1,
      opacity: 1,
      ease: "none",
      duration: 1.5,
    });
  });
};
