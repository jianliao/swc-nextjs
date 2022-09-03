import dynamic from 'next/dynamic';

import { IconUserExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconUserExclude.js';

export const SpIconUserExclude = dynamic<Partial<IconUserExclude> | { slot: string }>(
  () => import('./IconUserExclude').then((m) => m.SpIconUserExclude as any),
  { ssr: false}
);
