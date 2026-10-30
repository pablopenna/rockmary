import type { Metadata } from 'next';
import Home from '@/app/page';
import { getPageMetadata } from '@/app/i18n';
import { notoSansSC } from './fonts';

export const metadata: Metadata = getPageMetadata('zh');

export default function ZhHome() {
  return (
    <div className={notoSansSC.variable}>
      <Home locale="zh" />
    </div>
  );
}
