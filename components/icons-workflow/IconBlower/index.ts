import dynamic from 'next/dynamic';

import { IconBlower } from '@spectrum-web-components/icons-workflow/src/elements/IconBlower.js';

export const SpIconBlower = dynamic<Partial<IconBlower> | { slot: string }>(
  () => import('./IconBlower').then((m) => m.SpIconBlower as any),
  { ssr: false }
);
