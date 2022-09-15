import dynamic from 'next/dynamic';

import { IconSnapshot } from '@spectrum-web-components/icons-workflow/src/elements/IconSnapshot.js';

export const SpIconSnapshot = dynamic<Partial<IconSnapshot> | { slot: string }>(
  () => import('./IconSnapshot').then((m) => m.SpIconSnapshot as any),
  { ssr: false }
);
