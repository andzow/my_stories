export const useStatus = () => useState("use_status", () => null);
export const useCode = () => useState("use_code", () => false);
export const usePromoReal = () => useState("use_promo_real", () => []);
export const usePromoNoReal = () => useState("use_promo_no_real", () => []);
export const usePromoId = () => useState("use_promo_id", () => '');

export const useCategoryAll = () => useState("use_category_all", () => []);
export const useCategory = () => useState("use_category", () => false);
export const useCategoryId = () => useState("use_category_id", () => undefined);

export const useProduct = () => useState("use_product", () => false);

export const useMeasuremen = () => useState("use_measuremen", () => [{name: '', array: []}]);
export const useLine= () => useState("use_line", () => undefined);

export const useDimension = () => useState("use_dimension", () => [{name: '', array: []}]);
export const useDimensionItem= () => useState("use_dimension_item", () => undefined);

export const useName = () => useState("use_name", () => '');
export const usePrice = () => useState("use_price", () => null);
export const useDiscount = () => useState("use_discount", () => null);
export const useArticul = () => useState("use_articul", () => '');
export const useText = () => useState("use_text", () => '');
export const useCharacteristic = () => useState("use_сharacteristic", () => '');
export const useCategoryArray = () => useState("use_category_array", () => ['все']);
export const useColor = () => useState("use_color", () => '');
export const useColorValue = () => useState("use_color_value", () => '#af9280');
export const useListImages = () => useState("use_list_images", () => []);
export const useFileIn = () => useState("use_file_in", () => []);
export const useVideo = () => useState("use_video", () => null);
export const useVideoUrl = () => useState("use_file_url", () => null);

export const useProducts = () => useState("use_products", () => []);
export const useProductId = () => useState("use_product_id", () => null);

export const useProductUpdate = () => useState("use_product_update", () => false);

export const usePage = () => useState("use_page", () => 1);
export const usePageActive = () => useState("use_page_active", () => 1);

export const useUserAuth = () => useState("use_user_auth", () => false);
export const useUserData = () => useState("use_user_data", () => {});


