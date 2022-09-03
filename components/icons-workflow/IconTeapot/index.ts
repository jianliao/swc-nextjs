import dynamic from 'next/dynamic';

import { IconTeapot } from '@spectrum-web-components/icons-workflow/src/elements/IconTeapot.js';

export const SpIconTeapot = dynamic<Partial<IconTeapot> | { slot: string }>(
  () => import('./IconTeapot').then((m) => m.SpIconTeapot as any),
  { ssr: false}
);
