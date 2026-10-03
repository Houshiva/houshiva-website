export type ProjectCategory = 'website' | 'software' | 'management-system' | 'store' | 'dashboard';

export interface Project {
  slug: string;
  /** Sort position (lower first). Edited from the admin panel. */
  order: number;
  title: string;
  /** Latin/brand name people may search for (shown under the title, used in structured data). */
  englishName?: string;
  /** Extra search phrases for this project's page (meta keywords + structured data). */
  keywords?: string[];
  category: ProjectCategory;
  /** Abstract illustration variant (see ProjectCover.astro) — used when coverImage is absent. */
  cover: string;
  /** Real screenshot path (public/) — takes priority over the abstract cover when set. */
  coverImage?: string;
  /** Extra real screenshots for a project with a live/public site. */
  gallery?: string[];
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  /** Numbered implementation highlights, shown as "چطور ساختیم". */
  build: string[];
  features: string[];
  result: string;
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
 * نمونه‌کارهای واقعی تیم هوشیوا — هر پروژه یک فایل JSON در src/data/projects/ است
 * (از پنل مدیریت /admin/cms ویرایش می‌شود) و بر اساس «order» مرتب می‌شود.
 */
export const projects: Project[] = Object.values(
  import.meta.glob<Project>('./projects/*.json', { eager: true, import: 'default' }),
).sort((a, b) => a.order - b.order);
