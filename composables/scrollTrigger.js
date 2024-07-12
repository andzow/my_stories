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
  let observer = new IntersectionObserver(callback, options);
  observer.observe(target);

  function callback(en, observer) {
    const [entries] = en;
    if (entries.isIntersecting && !checkElement) {
      arr.forEach((el) => {
        const elHtml = document.querySelector(el);
        if (delayN) {
          elHtml.style.transition = `opacity 0.4s linear ${delayN}s`;
        } else {
          elHtml.style.transition = `opacity 0.4s linear`;
        }
        elHtml.style.opacity = "1";
      });
      checkElement = true;
    }
  }
};
