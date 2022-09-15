import dynamic from 'next/dynamic';

import { IconFileEmail } from '@spectrum-web-components/icons-workflow/src/elements/IconFileEmail.js';

export const SpIconFileEmail = dynamic<Partial<IconFileEmail> | { slot: string }>(
  () => import('./IconFileEmail').then((m) => m.SpIconFileEmail as any),
  { ssr: false }
);
