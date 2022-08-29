import dynamic from 'next/dynamic';

import { IconNote } from '@spectrum-web-components/icons-workflow/src/elements/IconNote.js';

export const SpIconNote = dynamic<IconNote | { slot: string }>(
  () => import('./IconNote').then((m) => m.SpIconNote as any),
  { ssr: false }
);
