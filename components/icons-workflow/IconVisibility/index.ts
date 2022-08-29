import dynamic from 'next/dynamic';

import { IconVisibility } from '@spectrum-web-components/icons-workflow/src/elements/IconVisibility.js';

export const SpIconVisibility = dynamic<IconVisibility | { slot: string }>(
  () => import('./IconVisibility').then((m) => m.SpIconVisibility as any),
  { ssr: false}
);
