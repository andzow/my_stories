export const useStatus = () => useState("use_status", () => null);
export const useCode = () => useState("use_code", () => false);
export const usePromoReal = () => useState("use_promo_real", () => []);
export const usePromoNoReal = () => useState("use_promo_no_real", () => []);
export const usePromoId = () => useState("use_promo_id", () => '');