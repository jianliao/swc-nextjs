import dynamic from 'next/dynamic';

import { IconNews } from '@spectrum-web-components/icons-workflow/src/elements/IconNews.js';

export const SpIconNews = dynamic<IconNews | { slot: string }>(
  () => import('./IconNews').then((m) => m.SpIconNews as any),
  { ssr: false }
);
