import type { IconName } from '../components/common/Icon.astro';

export interface Tool {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
}

export const tools: Tool[] = [
  {
    slug: 'date-converter',
    title: 'تبدیل تاریخ شمسی و میلادی',
    description: 'تبدیل آنی تاریخ بین گاه‌شمار شمسی و میلادی، به همراه نام روز هفته.',
    icon: 'calendar',
  },
  {
    slug: 'number-to-words',
    title: 'تبدیل عدد به حروف',
    description: 'نوشتن مبلغ یا هر عدد به حروف فارسی؛ مناسب برای فاکتور، چک و قرارداد.',
    icon: 'hash',
  },
  {
    slug: 'loan-calculator',
    title: 'محاسبه‌گر اقساط وام',
    description: 'محاسبه قسط ماهانه، مجموع بازپرداخت و سود کل بر اساس مبلغ، نرخ سود و مدت وام.',
    icon: 'cash',
  },
  {
    slug: 'prices',
    title: 'قیمت لحظه‌ای طلا و ارز',
    description: 'نمایش قیمت روز طلا، سکه و ارز — به‌زودی از منبع رسمی متصل می‌شود.',
    icon: 'trending-up',
  },
];
