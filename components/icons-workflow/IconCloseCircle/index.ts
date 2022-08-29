import dynamic from 'next/dynamic';

import { IconCloseCircle } from '@spectrum-web-components/icons-workflow/src/elements/IconCloseCircle.js';

export const SpIconCloseCircle = dynamic<IconCloseCircle | { slot: string }>(
  () => import('./IconCloseCircle').then((m) => m.SpIconCloseCircle as any),
  { ssr: false }
);
