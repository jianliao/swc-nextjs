import dynamic from 'next/dynamic';

import { IconTreeCollapse } from '@spectrum-web-components/icons-workflow/src/elements/IconTreeCollapse.js';

export const SpIconTreeCollapse = dynamic<Partial<IconTreeCollapse> | { slot: string }>(
  () => import('./IconTreeCollapse').then((m) => m.SpIconTreeCollapse as any),
  { ssr: false}
);
