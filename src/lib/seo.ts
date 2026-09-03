import { site } from '../data/site';

/** Builds a SoftwareApplication JSON-LD block for a free browser-based tool page. */
export function toolSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: new URL(path, site.url).toString(),
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any (مرورگر وب)',
    inLanguage: 'fa-IR',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IRR',
    },
    provider: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
  };
}
