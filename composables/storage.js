export const useStatus = () => useState("use_status", () => null);
export const useCode = () => useState("use_code", () => false);
export const usePromoReal = () => useState("use_promo_real", () => []);
export const usePromoNoReal = () => useState("use_promo_no_real", () => []);
export const usePromoId = () => useState("use_promo_id", () => '');

export const useCategoryAll = () => useState("use_category_all", () => []);
export const useCategory = () => useState("use_category", () => false);
export const useCategoryId = () => useState("use_category_id", () => undefined);

export const useProduct = () => useState("use_product", () => false);