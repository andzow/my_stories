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

export const useFilterScroll = () => useState("use_filter_scroll", () => false);

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

export const useScrollCheckMain = () =>
  useState("use_scroll_main", () => false);

export const useFilterFlout = () => {
  var a = document.querySelector("#filter__item"),
    b = null,
    K = null,
    Z = 0,
    P = 0,
    N = 0;
  window.addEventListener("scroll", Ascroll, false);
  function Ascroll() {
    var Ra = a.getBoundingClientRect(),
      R1bottom = document
        .querySelector("#catalog__content")
        .getBoundingClientRect().bottom;
    if (Ra.bottom < R1bottom) {
      if (b == null) {
        var Sa = getComputedStyle(a, ""),
          s = "";
        for (var i = 0; i < Sa.length; i++) {
          if (
            Sa[i].indexOf("overflow") == 0 ||
            Sa[i].indexOf("padding") == 0 ||
            Sa[i].indexOf("border") == 0 ||
            Sa[i].indexOf("outline") == 0 ||
            Sa[i].indexOf("box-shadow") == 0 ||
            Sa[i].indexOf("background") == 0
          ) {
            s += Sa[i] + ": " + Sa.getPropertyValue(Sa[i]) + "; ";
          }
        }
        b = document.createElement("div");
        b.className = "stop";
        b.style.cssText =
          s + " box-sizing: border-box; width: " + a.offsetWidth + "px;";
        a.insertBefore(b, a.firstChild);
        var l = a.childNodes.length;
        for (var i = 1; i < l; i++) {
          b.appendChild(a.childNodes[1]);
        }
        a.style.height = b.getBoundingClientRect().height + "px";
        a.style.padding = "0";
        a.style.border = "0";
      }
      var Rb = b.getBoundingClientRect(),
        Rh = Ra.top + Rb.height,
        W = document.documentElement.clientHeight,
        R1 = Math.round(Rh - R1bottom),
        R2 = Math.round(Rh - W);
      if (Rb.height > W) {
        if (Ra.top < K) {
          if (R2 + N > R1) {
            if (Rb.bottom - W + N <= 0) {
              b.className = "sticky";
              b.style.top = W - Rb.height - N + "px";
              Z = N + Ra.top + Rb.height - W;
            } else {
              b.className = "stop";
              b.style.top = -Z + "px";
            }
          } else {
            b.className = "stop";
            b.style.top = -R1 + "px";
            Z = R1;
          }
        } else {
          // скролл вверх
          if (Ra.top - P < 0) {
            if (Rb.top - P >= 0) {
              // подцепиться
              b.className = "sticky";
              b.style.top = P + "px";
              Z = Ra.top - P;
            } else {
              b.className = "stop";
              b.style.top = -Z + "px";
            }
          } else {
            b.className = "";
            b.style.top = "";
            Z = 0;
          }
        }
        K = Ra.top;
      } else {
        if (Ra.top - P <= 0) {
          if (Ra.top - P <= R1) {
            b.className = "stop";
            b.style.top = -R1 + "px";
          } else {
            b.className = "sticky";
            b.style.top = P + "px";
          }
        } else {
          b.className = "";
          b.style.top = "";
        }
      }
    }
  }
};
