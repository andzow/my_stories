export const useGsapAnimationOpacity = (
  arr,
  triggerEl,
  startMarker,
  delayN
) => {
  let checkElement = false;
  if (!Array.isArray(arr)) {
    return;
  }
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.45,
  };
  let target = document.querySelector(`${triggerEl}`);
  if (!target) {
    return;
  }
  let observer = new IntersectionObserver(callback, options);
  observer.observe(target);
  if (!target) {
    observer.disconnect();
    return;
  }

  function callback(en, observer) {
    const [entries] = en;
    if (entries.isIntersecting && !checkElement) {
      arr.forEach((el) => {
        const elHtml = document.querySelector(el);
        if (!elHtml) {
          observer.disconnect();
          return;
        }
        if (delayN) {
          elHtml.style.transition = `opacity 1.5s ease ${delayN}s`;
        } else {
          elHtml.style.transition = `opacity 1.5s ease`;
        }
        elHtml.style.opacity = "1";
      });
      checkElement = true;
    }
  }
};
