import type { Metadata } from 'next';
import Home from '@/app/page';
import { getPageMetadata } from '@/app/i18n';

export const metadata: Metadata = getPageMetadata('es');

export default function EsHome() {
  return <Home locale="es" />;
}
