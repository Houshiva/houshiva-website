import type { ServiceVisualVariant } from '../components/illustrations/ServiceVisual.astro';

export type ServiceGroup = 'ai' | 'product' | 'business' | 'infra';

export const serviceGroups: Record<ServiceGroup, { label: string; description: string }> = {
  ai: { label: 'هوش مصنوعی', description: 'دستیار هوشمند، ایجنت‌ها، پردازش تصویر و اسناد، و پیش‌بینی با داده' },
  product: { label: 'وب، اپ و محصول', description: 'از سایت و فروشگاه تا اپلیکیشن، طراحی تجربه کاربری و پلتفرم‌های SaaS' },
  business: { label: 'سیستم‌های کسب‌وکار', description: 'حسابداری، فروش، مشتری، انبار، اتوماسیون و داشبورد مدیریتی' },
  infra: { label: 'یکپارچه‌سازی و زیرساخت', description: 'اتصال سامانه‌ها، زیرساخت ابری، DevOps و امنیت' },
};

export interface Service {
  slug: string;
  /** Sort position (lower first). Edited from the admin panel. */
  order: number;
  group: ServiceGroup;
  /** Animated scene shown on cards and the services page. */
  visual: ServiceVisualVariant;
  /** Optional small label, e.g. «جدید». */
  badge?: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  features: string[];
  suitableFor: string[];
}

/** هر خدمت یک فایل JSON در src/data/services/ است (ویرایش از /admin/cms)، مرتب‌شده بر اساس «order». */
export const services: Service[] = Object.values(
  import.meta.glob<Service>('./services/*.json', { eager: true, import: 'default' }),
).sort((a, b) => a.order - b.order);
