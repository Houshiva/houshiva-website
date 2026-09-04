export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: 'خانه', href: '/' },
  { label: 'خدمات', href: '/services' },
  { label: 'نمونه‌کارها', href: '/portfolio' },
  { label: 'آموزش', href: '/education' },
  { label: 'ابزارها', href: '/tools' },
  { label: 'درباره ما', href: '/about' },
  { label: 'تماس با ما', href: '/contact' },
];

export const footerNav = {
  pages: [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'خدمات', href: '/services' },
    { label: 'نمونه‌کارها', href: '/portfolio' },
    { label: 'آموزش', href: '/education' },
    { label: 'ابزارها', href: '/tools' },
    { label: 'درباره ما', href: '/about' },
    { label: 'تماس با ما', href: '/contact' },
  ] as NavLink[],
};
