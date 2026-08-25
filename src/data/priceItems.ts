export interface PriceCategory {
  key: string;
  label: string;
  items: string[];
}

/**
 * ساختار صفحه قیمت‌ها — فعلاً بدون داده زنده.
 * برای اتصال به داده واقعی، این فایل و اسکریپت صفحه tools/prices.astro
 * باید به یک API قیمت معتبر (طلا/ارز/خودرو) وصل شوند.
 */
export const priceCategories: PriceCategory[] = [
  {
    key: 'gold',
    label: 'طلا و سکه',
    items: ['طلای ۱۸ عیار (هر گرم)', 'سکه امامی', 'سکه بهار آزادی', 'نیم‌سکه', 'ربع‌سکه'],
  },
  {
    key: 'currency',
    label: 'ارز',
    items: ['دلار آمریکا', 'یورو', 'درهم امارات', 'لیر ترکیه'],
  },
  {
    key: 'car',
    label: 'خودرو',
    items: ['پراید ۱۳۱', 'پژو ۲۰۶', 'پژو ۲۰۷', 'سمند LX', 'تارا'],
  },
];
