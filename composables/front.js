import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useCursor = () => useState("use_cursor", () => null);
export const useVeriableAnimationLine = () => useState("use_line", () => null);
export const useRegPlugin = () => useState("use_plugin", () => null);
export const useVariebleLookbook = () => useState("use_lookbook", () => null);
export const useCheckAnimation = () =>
  useState("use_check_animation", () => false);

export const useCheckAnimationArr = () =>
  useState("use_check_animation_arr", () => []);
export const useFilterPrice = () =>
  useState("use_filter_price", () => ({ activeMinVal: "", activeMaxVal: "" }));
export const useCheckPrice = () => useState("use_check_price", () => false);
export const useCheckReset = () => useState("use_check_reset", () => false);
export const useCatalogItems = () => useState("use_catalog_items", () => []);

const animationsArrGsap = [];

export const useGsapAnimationOpacity = (
  arr,
  triggerEl,
  startMarker,
  delayN
) => {
  if (!Array.isArray(arr)) {
    return;
  }

  arr.forEach((el, idx) => {
    const animation = gsap.to(el, {
      scrollTrigger: {
        trigger: triggerEl,
        start: `top ${startMarker ? "90%" : "80%"}`,
        markers: false,
      },
      delay: delayN ? delayN : 0,
      opacity: 1,
      ease: "linear",
      duration: 1,
    });
    animationsArrGsap.push(animation);
    useCheckAnimationArr().value = animationsArrGsap;
  });
};

export const useArrFilterChapter = () =>
  useState("use_filter_chapter", () => []);
export const useArrFilterSize = () => useState("use_filter_size", () => []);

export const useReplaceOrDeleteWordQuery = (
  nameQuery,
  defaultName,
  withOutDefaultName,
  oneValue
) => {
  if (oneValue?.check) {
    const regex = /^\d+$/;
    const regExpTest = regex.test(defaultName);
    return {
      [nameQuery]: !regExpTest ? oneValue.value : defaultName,
    };
  }
  const queryRoute = useRoute().query[nameQuery];
  let set = new Set();
  if (queryRoute) {
    const setQueryRoute = queryRoute.split(";").filter((el) => {
      if (withOutDefaultName) {
        set.add(el);
        return el;
      }
      if (el.toLowerCase() !== defaultName.toLowerCase()) {
        set.add(el);
        return el;
      }
    });
    const newArr = [];
    set.forEach((el) => newArr.push(el));
    if (defaultName) {
      newArr.unshift(defaultName);
      return {
        [nameQuery]: newArr.join(";"),
      };
    }
    return {
      [nameQuery]: newArr.join(";"),
    };
  }
  return {
    [nameQuery]: defaultName,
  };
};
