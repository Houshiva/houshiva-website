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
  {
    slug: 'resume-builder',
    title: 'رزومه‌ساز آنلاین',
    description: 'ساخت رزومه حرفه‌ای با پیش‌نمایش زنده؛ کاملاً رایگان و آماده چاپ یا ذخیره PDF.',
    icon: 'copy',
  },
  {
    slug: 'business-card',
    title: 'کارت ویزیت دیجیتال',
    description: 'ساخت کارت ویزیت دیجیتال با عکس، QR کد تماس و پیش‌نمایش زنده؛ آماده چاپ یا اشتراک‌گذاری.',
    icon: 'users',
  },
  {
    slug: 'event-card',
    title: 'کارت دعوت جشن و عروسی',
    description: 'ساخت کارت دعوت زیبا برای عروسی، تولد و مراسم؛ چند قالب رنگی، آماده چاپ یا ارسال.',
    icon: 'spark',
  },
  {
    slug: 'time-tools',
    title: 'ابزار زمان و ساعت جهانی',
    description: 'ساعت لحظه‌ای کشورهای مختلف، تبدیل منطقه زمانی، تبدیل Timestamp و اختلاف زمانی دو کشور.',
    icon: 'clock',
  },
  {
    slug: 'image-tool',
    title: 'فشرده‌سازی و تبدیل عکس',
    description: 'کاهش حجم عکس، تبدیل بین JPG، PNG و WebP و تغییر ابعاد — کاملاً در مرورگر، بدون آپلود.',
    icon: 'refresh',
  },
  {
    slug: 'pdf-tool',
    title: 'ابزار PDF',
    description: 'ادغام چند PDF، حذف یا جابه‌جایی صفحات، تبدیل عکس به PDF و دانلود هر صفحه به‌تنهایی.',
    icon: 'layers',
  },
];
