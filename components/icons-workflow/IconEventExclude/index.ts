import dynamic from 'next/dynamic';

import { IconEventExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconEventExclude.js';

export const SpIconEventExclude = dynamic<Partial<IconEventExclude> | { slot: string }>(
  () => import('./IconEventExclude').then((m) => m.SpIconEventExclude as any),
  { ssr: false }
);
