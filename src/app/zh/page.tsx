import type { Metadata } from 'next';
import Home from '@/app/page';
import { getPageMetadata } from '@/app/i18n';

export const metadata: Metadata = getPageMetadata('zh');

export default function ZhHome() {
  return <Home locale="zh" />;
}
