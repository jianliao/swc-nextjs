import dynamic from 'next/dynamic';

import { IconSaveAsFloppy } from '@spectrum-web-components/icons-workflow/src/elements/IconSaveAsFloppy.js';

export const SpIconSaveAsFloppy = dynamic<Partial<IconSaveAsFloppy> | { slot: string }>(
  () => import('./IconSaveAsFloppy').then((m) => m.SpIconSaveAsFloppy as any),
  { ssr: false}
);
