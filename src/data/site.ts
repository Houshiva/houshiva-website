export const site = {
  name: 'هوشیوا',
  nameEn: 'Houshiva',
  tagline: 'راهکارهای نرم‌افزاری برای رشد هوشمند کسب‌وکار',
  description:
    'هوشیوا تیمی متخصص در طراحی سایت، توسعه نرم‌افزارهای اختصاصی و سامانه‌های مدیریتی است که با تمرکز بر نیاز واقعی کسب‌وکارها، محصولاتی کاربردی و قابل توسعه می‌سازد.',
  domain: 'houshiva.ir',
  url: 'https://houshiva.ir',
  locale: 'fa_IR',

  contact: {
    email: 'info@houshiva.ir',
    secondaryEmail: 'houshiva@gmail.com',
    phones: [
      { label: 'تماس و مشاوره', number: '0937 774 7217', href: '+989377747217' },
      { label: 'پشتیبانی', number: '0935 595 8047', href: '+989355958047' },
    ],
  },

  social: [
    { name: 'اینستاگرام', platform: 'instagram', url: 'https://instagram.com/houshiva' },
    { name: 'یوتیوب', platform: 'youtube', url: 'https://youtube.com/@houshiva' },
    { name: 'آپارات', platform: 'aparat', url: 'https://aparat.com/houshiva' },
    { name: 'گیت‌هاب', platform: 'github', url: 'https://github.com/houshiva' },
  ],
} as const;
