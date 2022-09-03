import dynamic from 'next/dynamic';

import { IconPawn } from '@spectrum-web-components/icons-workflow/src/elements/IconPawn.js';

export const SpIconPawn = dynamic<Partial<IconPawn> | { slot: string }>(
  () => import('./IconPawn').then((m) => m.SpIconPawn as any),
  { ssr: false}
);
