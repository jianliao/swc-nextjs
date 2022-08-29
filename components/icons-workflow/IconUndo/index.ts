import dynamic from 'next/dynamic';

import { IconUndo } from '@spectrum-web-components/icons-workflow/src/elements/IconUndo.js';

export const SpIconUndo = dynamic<IconUndo | { slot: string }>(
  () => import('./IconUndo').then((m) => m.SpIconUndo as any),
  { ssr: false }
);
