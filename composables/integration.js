export const useDeliveryObj = () =>
  useState("use_delivery_obj", () => ({
    tariff_code: ["136", "137"],
    from_location: {
      code: 415,
    },
    to_location: {
      code: 44,
    },
    packages: [
      {
        weight: 1000,
      },
    ],
  }));
export const useCityCode = () => useState("use_city_code", () => 44);

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
      nameCompany: "сдек",
      day: minPadej === maxPadej ? minPadej : maxPadej,
      des:
        key === "tariff_136"
          ? "СДЭК (самовывоз)"
          : "Доставка заказа курьером компании СДЭК",
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
