export const useDeliveryObj = () =>
  useState("use_delivery_obj", () => ({
    tariff_code: ["136", "137"],
    from_location: {
      code: 415,
    },
    to_location: {
      code: 44,
    },
  }));
export const useFilterDeliveryPackages = () => {
  const parseCart = JSON.parse(localStorage.getItem("cart"));
  const newArr = parseCart.map((el) => {
    let widthEl = el.counter * el.width;
    let weightEl = el.counter * el.weight;
    let heightEl = el.counter * el.height;
    let lengthEl = el.counter * el.length;
    return {
      weight: weightEl,
      length: lengthEl,
      width: widthEl,
      height: heightEl,
    };
  });
  let width = 0;
  let weight = 0;
  let length = 0;
  let height = 0;
  newArr.forEach((el) => {
    width += el.width;
    weight += el.weight;
    length += el.length;
    height += el.height;
  });
  return [
    {
      weight: weight,
      length: length,
      width: width,
      height: height,
    },
  ];
};
export const useCityCode = () => useState("use_city_code", () => 44);
export const useBuyerAddress = () => useState("use_buyer_address", () => "");
export const useIndexDelivery = () => useState("use_index_delivery", () => 0);
export const useCheckErrors = () => useState("use_check_errors", () => []);
export const useSelectedSamovivos = () =>
  useState("use_selected_samovivos", () => false);
export const useActiveAddress = () =>
  useState("use_active_address", () => null);
export const useLoadingButton = () => useState("use_loading_btn", () => false);

function getDayPadej(days) {
  if (days % 100 >= 11 && days % 100 <= 19) {
    return "дней";
  }
  switch (days % 10) {
    case 1:
      return "дня";
    case 2:
    case 3:
    case 4:
      return "дня";
    default:
      return "дней";
  }
}
export const useDeliveryLoad = (check, response) => {
  const newArr = [];
  for (let key in response) {
    const minPadej = getDayPadej(response[key].period_min);
    const maxPadej = getDayPadej(response[key].period_max);

    newArr.push({
      name:
        key === "tariff_136" ? "СДЭК (самовывоз)" : "СДЭК (Доставка курьером)",
      ...response[key],
      nameCompany: "СДЭК",
      day: minPadej === maxPadej ? minPadej : maxPadej,
      des:
        key === "tariff_136"
          ? "СДЭК (самовывоз)"
          : "Доставка заказа осуществляется курьером компании СДЭК",
      sumDelivery: check ? 0 : response[key].total_sum,
      deliveryTime:
        response[key].period_min === response[key].period_max
          ? response[key].period_min
          : response[key].period_min + "-" + response[key].period_max,
    });
  }
  return newArr;
};

export const useActiveMenu = () => useState("use_active_menu", () => false);
