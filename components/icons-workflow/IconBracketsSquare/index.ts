import dynamic from 'next/dynamic';

import { IconBracketsSquare } from '@spectrum-web-components/icons-workflow/src/elements/IconBracketsSquare.js';

export const SpIconBracketsSquare = dynamic<Partial<IconBracketsSquare> | { slot: string }>(
  () => import('./IconBracketsSquare').then((m) => m.SpIconBracketsSquare as any),
  { ssr: false}
);
