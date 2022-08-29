import dynamic from 'next/dynamic';

import { IconWebPages } from '@spectrum-web-components/icons-workflow/src/elements/IconWebPages.js';

export const SpIconWebPages = dynamic<IconWebPages | { slot: string }>(
  () => import('./IconWebPages').then((m) => m.SpIconWebPages as any),
  { ssr: false }
);
