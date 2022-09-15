import dynamic from 'next/dynamic';

import { IconAttach } from '@spectrum-web-components/icons-workflow/src/elements/IconAttach.js';

export const SpIconAttach = dynamic<Partial<IconAttach> | { slot: string }>(
  () => import('./IconAttach').then((m) => m.SpIconAttach as any),
  { ssr: false }
);
