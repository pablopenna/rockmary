import type { Metadata } from 'next';
import Home from '@/app/page';
import { getPageMetadata } from '@/app/i18n';

// Same content as /, but never redirected by browser-language detection. The canonical URL points
// search engines at / so the two aren't indexed as duplicates.
export const metadata: Metadata = {
  ...getPageMetadata('en'),
  alternates: { canonical: 'https://rockmary.com/' },
};

export default function EnHome() {
  return <Home locale="en" />;
}
