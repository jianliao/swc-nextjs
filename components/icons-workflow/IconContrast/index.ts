import dynamic from 'next/dynamic';

import { IconContrast } from '@spectrum-web-components/icons-workflow/src/elements/IconContrast.js';

export const SpIconContrast = dynamic<Partial<IconContrast> | { slot: string }>(
  () => import('./IconContrast').then((m) => m.SpIconContrast as any),
  { ssr: false}
);
