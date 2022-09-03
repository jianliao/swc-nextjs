import dynamic from 'next/dynamic';

import { IconSaveFloppy } from '@spectrum-web-components/icons-workflow/src/elements/IconSaveFloppy.js';

export const SpIconSaveFloppy = dynamic<Partial<IconSaveFloppy> | { slot: string }>(
  () => import('./IconSaveFloppy').then((m) => m.SpIconSaveFloppy as any),
  { ssr: false}
);
