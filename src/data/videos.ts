export interface Video {
  slug: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  publishDate: string;
  /** Direct video file URL (mp4). Empty until real footage/hosting is added. */
  videoUrl: string;
  poster: 'website' | 'store' | 'crm' | 'pos' | 'dashboard';
}

/**
 * نمونه محتوای ویدیویی — ساختار آماده است؛ کافی است بعداً videoUrl واقعی
 * (فایل میزبانی‌شده روی سرور یا CDN خودتان) را جایگزین کنید.
 */
export const videos: Video[] = [
  {
    slug: 'houshiva-dashboard-tour',
    title: 'آشنایی با پنل مدیریت فروش هوشیوا',
    description: 'مروری کوتاه بر داشبورد مدیریتی و نحوه نمایش شاخص‌های کلیدی فروش در یک نگاه.',
    category: 'دمو محصول',
    duration: '۰۸:۴۲',
    publishDate: '۱۴۰۵/۰۵/۲۰',
    videoUrl: '',
    poster: 'dashboard',
  },
  {
    slug: 'crm-order-registration',
    title: 'چطور یک سفارش را در سیستم CRM ثبت کنیم؟',
    description: 'آموزش گام‌به‌گام ثبت سفارش جدید و پیگیری وضعیت آن در سامانه CRM.',
    category: 'آموزش نرم‌افزار',
    duration: '۰۵:۱۵',
    publishDate: '۱۴۰۵/۰۴/۰۲',
    videoUrl: '',
    poster: 'crm',
  },
  {
    slug: 'pos-quick-tour',
    title: 'تور سریع سیستم صندوق فروشگاهی',
    description: 'نمایی سریع از ثبت فروش، صدور فاکتور و هماهنگی لحظه‌ای موجودی در سیستم صندوق.',
    category: 'دمو محصول',
    duration: '۰۶:۳۰',
    publishDate: '۱۴۰۵/۰۲/۱۱',
    videoUrl: '',
    poster: 'pos',
  },
];
