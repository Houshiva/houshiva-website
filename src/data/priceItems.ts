export interface PriceItem {
  label: string;
  /** نماد نظیر در وب‌سرویس BrsApi — نبودنش یعنی این مورد فعلاً منبع زنده ندارد. */
  symbol?: string;
}

export interface PriceCategory {
  key: string;
  label: string;
  items: PriceItem[];
}

/**
 * ساختار صفحه قیمت‌ها. طلا، سکه و ارز از وب‌سرویس BrsApi در زمان build خوانده می‌شوند
 * (src/pages/tools/prices.astro) — برای همین «symbol» باید دقیقاً با نماد آن سرویس یکی باشد.
 * برای خودرو فعلاً منبع رایگان معتبری پیدا نشده، پس بدون symbol و همیشه «به‌زودی» می‌ماند.
 */
export const priceCategories: PriceCategory[] = [
  {
    key: 'gold',
    label: 'طلا و سکه',
    items: [
      { label: 'طلای ۱۸ عیار (هر گرم)', symbol: 'IR_GOLD_18K' },
      { label: 'سکه امامی', symbol: 'IR_COIN_EMAMI' },
      { label: 'سکه بهار آزادی', symbol: 'IR_COIN_BAHAR' },
      { label: 'نیم‌سکه', symbol: 'IR_COIN_HALF' },
      { label: 'ربع‌سکه', symbol: 'IR_COIN_QUARTER' },
    ],
  },
  {
    key: 'currency',
    label: 'ارز',
    items: [
      { label: 'دلار آمریکا', symbol: 'USD' },
      { label: 'یورو', symbol: 'EUR' },
      { label: 'درهم امارات', symbol: 'AED' },
      { label: 'لیر ترکیه', symbol: 'TRY' },
    ],
  },
  {
    key: 'car',
    label: 'خودرو',
    items: [
      { label: 'پراید ۱۳۱' },
      { label: 'پژو ۲۰۶' },
      { label: 'پژو ۲۰۷' },
      { label: 'سمند LX' },
      { label: 'تارا' },
    ],
  },
];
