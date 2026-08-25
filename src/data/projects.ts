export type ProjectCategory = 'website' | 'software' | 'management-system' | 'store' | 'dashboard';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  cover: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  link?: string;
}

export const projectCategories: Record<ProjectCategory, string> = {
  website: 'وب‌سایت',
  software: 'نرم‌افزار',
  'management-system': 'سیستم مدیریتی',
  store: 'فروشگاه',
  dashboard: 'داشبورد',
};

/**
 * نمونه‌کارهای اولیه — این پروژه‌ها به‌عنوان نمونه ساختاری ثبت شده‌اند
 * و باید پیش از انتشار نهایی سایت با پروژه‌های واقعی و تصاویر واقعی جایگزین شوند.
 */
export const projects: Project[] = [
  {
    slug: 'retail-pos-system',
    title: 'سامانه صندوق فروشگاه زنجیره‌ای',
    category: 'management-system',
    cover: 'pos',
    shortDescription: 'سیستم صندوق و مدیریت موجودی برای یک مجموعه فروشگاهی چندشعبه‌ای.',
    problem:
      'ثبت فروش در شعب مختلف به‌صورت جدا از هم انجام می‌شد و موجودی هر شعبه با تأخیر و به‌صورت دستی به‌روزرسانی می‌شد که باعث مغایرت مکرر بین فروش و انبار می‌شد.',
    solution:
      'یک سامانه صندوق متمرکز طراحی شد که فروش هر شعبه را به‌صورت لحظه‌ای با موجودی مرکزی هماهنگ می‌کند و گزارش فروش تمام شعب را در یک داشبورد واحد در اختیار مدیریت قرار می‌دهد.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'distributor-crm',
    title: 'CRM شرکت پخش و توزیع',
    category: 'software',
    cover: 'crm',
    shortDescription: 'سامانه مدیریت ارتباط با مشتری برای تیم فروش یک شرکت پخش.',
    problem:
      'پیگیری سفارش‌های مشتریان و ارتباط تیم فروش با نمایندگی‌ها روی اکسل و پیام‌رسان انجام می‌شد و اطلاعات مهم مشتریان به‌راحتی گم می‌شد.',
    solution:
      'یک CRM اختصاصی متناسب با قیف فروش واقعی شرکت طراحی شد که پیگیری سفارش، وضعیت هر نمایندگی و یادآوری تماس‌ها را در یک مکان متمرکز کرد.',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
  },
  {
    slug: 'boutique-online-store',
    title: 'فروشگاه اینترنتی برند پوشاک',
    category: 'store',
    cover: 'store',
    shortDescription: 'فروشگاه آنلاین اختصاصی با مدیریت محصول، سبد خرید و پرداخت.',
    problem:
      'برند برای فروش آنلاین به یک پلتفرم فروشگاه‌ساز عمومی وابسته بود که امکان شخصی‌سازی طراحی و فرآیند پرداخت را محدود می‌کرد.',
    solution:
      'یک فروشگاه اینترنتی اختصاصی با طراحی متناسب با هویت برند و اتصال مستقیم به درگاه پرداخت داخلی ساخته شد که سرعت و تجربه خرید را به‌طور محسوسی بهبود داد.',
    technologies: ['Astro', 'TypeScript', 'Stripe/درگاه داخلی'],
  },
  {
    slug: 'workshop-management-dashboard',
    title: 'داشبورد مدیریتی کارگاه تولیدی',
    category: 'dashboard',
    cover: 'dashboard',
    shortDescription: 'داشبورد یکپارچه برای رصد تولید، موجودی مواد اولیه و سفارش‌ها.',
    problem:
      'مدیریت کارگاه برای دیدن وضعیت تولید، موجودی مواد اولیه و سفارش‌های در جریان باید چند گزارش جدا را کنار هم بررسی می‌کرد.',
    solution:
      'یک داشبورد مدیریتی طراحی شد که وضعیت تولید، موجودی و سفارش‌ها را در یک نمای واحد و لحظه‌ای نمایش می‌دهد و امکان تصمیم‌گیری سریع‌تر را فراهم کرده است.',
    technologies: ['React', 'Node.js', 'Chart.js'],
  },
  {
    slug: 'corporate-website',
    title: 'وب‌سایت شرکتی مجموعه خدمات مهندسی',
    category: 'website',
    cover: 'website',
    shortDescription: 'وب‌سایت معرفی خدمات با تمرکز بر سرعت و سئو.',
    problem:
      'وب‌سایت قبلی شرکت با یک قالب عمومی ساخته شده بود، سرعت پایینی داشت و در نتایج جستجوی گوگل جایگاه مناسبی نداشت.',
    solution:
      'وب‌سایت جدید با تمرکز بر سرعت بارگذاری، ساختار مناسب سئو و طراحی اختصاصی متناسب با هویت بصری شرکت بازطراحی شد.',
    technologies: ['Astro', 'TypeScript', 'CSS'],
  },
];
