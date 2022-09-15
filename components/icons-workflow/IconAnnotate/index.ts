import dynamic from 'next/dynamic';

import { IconAnnotate } from '@spectrum-web-components/icons-workflow/src/elements/IconAnnotate.js';

export const SpIconAnnotate = dynamic<Partial<IconAnnotate> | { slot: string }>(
  () => import('./IconAnnotate').then((m) => m.SpIconAnnotate as any),
  { ssr: false }
);
