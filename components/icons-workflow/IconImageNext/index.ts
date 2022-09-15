import dynamic from 'next/dynamic';

import { IconImageNext } from '@spectrum-web-components/icons-workflow/src/elements/IconImageNext.js';

export const SpIconImageNext = dynamic<Partial<IconImageNext> | { slot: string }>(
  () => import('./IconImageNext').then((m) => m.SpIconImageNext as any),
  { ssr: false }
);
