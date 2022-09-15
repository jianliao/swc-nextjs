import dynamic from 'next/dynamic';

import { IconLabelExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconLabelExclude.js';

export const SpIconLabelExclude = dynamic<Partial<IconLabelExclude> | { slot: string }>(
  () => import('./IconLabelExclude').then((m) => m.SpIconLabelExclude as any),
  { ssr: false }
);
