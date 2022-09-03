import dynamic from 'next/dynamic';

import { IconBrackets } from '@spectrum-web-components/icons-workflow/src/elements/IconBrackets.js';

export const SpIconBrackets = dynamic<Partial<IconBrackets> | { slot: string }>(
  () => import('./IconBrackets').then((m) => m.SpIconBrackets as any),
  { ssr: false}
);
