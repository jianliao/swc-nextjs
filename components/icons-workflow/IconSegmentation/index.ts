import dynamic from 'next/dynamic';

import { IconSegmentation } from '@spectrum-web-components/icons-workflow/src/elements/IconSegmentation.js';

export const SpIconSegmentation = dynamic<Partial<IconSegmentation> | { slot: string }>(
  () => import('./IconSegmentation').then((m) => m.SpIconSegmentation as any),
  { ssr: false }
);
