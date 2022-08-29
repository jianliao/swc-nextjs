import dynamic from 'next/dynamic';

import { IconFileSingleWebPage } from '@spectrum-web-components/icons-workflow/src/elements/IconFileSingleWebPage.js';

export const SpIconFileSingleWebPage = dynamic<IconFileSingleWebPage | { slot: string }>(
  () => import('./IconFileSingleWebPage').then((m) => m.SpIconFileSingleWebPage as any),
  { ssr: false }
);
