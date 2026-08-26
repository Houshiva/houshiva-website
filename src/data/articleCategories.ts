import type { IconName } from '../components/common/Icon.astro';

export interface ArticleCategory {
  name: string;
  icon: IconName;
}

/** The topic categories the education section is organized around. */
export const articleCategories: ArticleCategory[] = [
  { name: 'پایتون', icon: 'code' },
  { name: 'هوش مصنوعی و یادگیری ماشین', icon: 'spark' },
  { name: 'برنامه‌نویسی وب', icon: 'globe' },
  { name: 'پایگاه‌داده و SQL', icon: 'layers' },
  { name: 'ابزار و مفاهیم برنامه‌نویسی', icon: 'workflow' },
  { name: 'نرم‌افزار کسب‌وکار', icon: 'dashboard' },
];

export function slugForCategory(category: string): string {
  const index = articleCategories.findIndex((c) => c.name === category);
  return index >= 0 ? `cat-${index}` : 'cat-other';
}
