import dynamic from 'next/dynamic';

import { IconColorFill } from '@spectrum-web-components/icons-workflow/src/elements/IconColorFill.js';

export const SpIconColorFill = dynamic<Partial<IconColorFill> | { slot: string }>(
  () => import('./IconColorFill').then((m) => m.SpIconColorFill as any),
  { ssr: false}
);
