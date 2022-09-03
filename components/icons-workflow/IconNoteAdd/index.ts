import dynamic from 'next/dynamic';

import { IconNoteAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconNoteAdd.js';

export const SpIconNoteAdd = dynamic<Partial<IconNoteAdd> | { slot: string }>(
  () => import('./IconNoteAdd').then((m) => m.SpIconNoteAdd as any),
  { ssr: false}
);
