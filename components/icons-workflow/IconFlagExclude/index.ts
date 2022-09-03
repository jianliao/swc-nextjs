import dynamic from 'next/dynamic';

import { IconFlagExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconFlagExclude.js';

export const SpIconFlagExclude = dynamic<Partial<IconFlagExclude> | { slot: string }>(
  () => import('./IconFlagExclude').then((m) => m.SpIconFlagExclude as any),
  { ssr: false}
);
