import dynamic from 'next/dynamic';

import { IconApp } from '@spectrum-web-components/icons-workflow/src/elements/IconApp.js';

export const SpIconApp = dynamic<Partial<IconApp> | { slot: string }>(
  () => import('./IconApp').then((m) => m.SpIconApp as any),
  { ssr: false }
);
