export interface Video {
  slug: string;
  /** Sort position (lower first). Edited from the admin panel. */
  order: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  publishDate: string;
  /** Direct video file URL (mp4). Empty until real footage/hosting is added. */
  videoUrl: string;
  poster: 'website' | 'store' | 'crm' | 'pos' | 'dashboard';
}

/** هر ویدیو یک فایل JSON در src/data/videos/ است (ویرایش از /admin/cms)، مرتب‌شده بر اساس «order». */
export const videos: Video[] = Object.values(
  import.meta.glob<Video>('./videos/*.json', { eager: true, import: 'default' }),
).sort((a, b) => a.order - b.order);
