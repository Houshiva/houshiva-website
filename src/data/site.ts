import editable from './settings/site.json';

export interface SocialLink {
  name: string;
  platform: 'instagram' | 'youtube' | 'aparat' | 'github';
  url: string;
}

/**
 * Fixed identity (name, domain) lives here; everything editable — tagline,
 * description, contact info, social links, analytics ID — comes from
 * settings/site.json, which the admin panel (/admin/cms) edits.
 */
export const site = {
  name: 'هوشیوا',
  nameEn: 'Houshiva',
  domain: 'houshiva.ir',
  url: 'https://houshiva.ir',
  locale: 'fa_IR',
  tagline: editable.tagline,
  description: editable.description,
  contact: editable.contact,
  social: editable.social as SocialLink[],
  analytics: editable.analytics,
};
