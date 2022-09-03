import dynamic from 'next/dynamic';

import { IconWebPage } from '@spectrum-web-components/icons-workflow/src/elements/IconWebPage.js';

export const SpIconWebPage = dynamic<Partial<IconWebPage> | { slot: string }>(
  () => import('./IconWebPage').then((m) => m.SpIconWebPage as any),
  { ssr: false}
);
