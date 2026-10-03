import editable from './settings/prices.json';

export interface PriceItem {
  label: string;
  symbol: string;
}

export interface PriceCategory {
  key: string;
  label: string;
  items: PriceItem[];
}

/**
 * ساختار صفحه قیمت‌ها. طلا، سکه و ارز از وب‌سرویس BrsApi در زمان build خوانده می‌شوند
 * (src/pages/tools/prices.astro) — برای همین «symbol» باید دقیقاً با نماد آن سرویس یکی باشد.
 * فهرست از settings/prices.json خوانده می‌شود (ویرایش از /admin/cms).
 */
export const priceCategories: PriceCategory[] = editable.categories;
