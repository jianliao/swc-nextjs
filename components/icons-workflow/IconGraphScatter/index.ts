import dynamic from 'next/dynamic';

import { IconGraphScatter } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphScatter.js';

export const SpIconGraphScatter = dynamic<Partial<IconGraphScatter> | { slot: string }>(
  () => import('./IconGraphScatter').then((m) => m.SpIconGraphScatter as any),
  { ssr: false }
);
