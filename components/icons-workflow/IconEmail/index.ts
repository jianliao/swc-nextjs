import dynamic from 'next/dynamic';

import { IconEmail } from '@spectrum-web-components/icons-workflow/src/elements/IconEmail.js';

export const SpIconEmail = dynamic<Partial<IconEmail> | { slot: string }>(
  () => import('./IconEmail').then((m) => m.SpIconEmail as any),
  { ssr: false}
);
