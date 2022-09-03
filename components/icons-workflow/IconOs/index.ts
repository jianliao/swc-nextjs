import dynamic from 'next/dynamic';

import { IconOs } from '@spectrum-web-components/icons-workflow/src/elements/IconOs.js';

export const SpIconOs = dynamic<Partial<IconOs> | { slot: string }>(
  () => import('./IconOs').then((m) => m.SpIconOs as any),
  { ssr: false}
);
