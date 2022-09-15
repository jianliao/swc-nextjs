import dynamic from 'next/dynamic';

import { IconPasteHTML } from '@spectrum-web-components/icons-workflow/src/elements/IconPasteHTML.js';

export const SpIconPasteHTML = dynamic<Partial<IconPasteHTML> | { slot: string }>(
  () => import('./IconPasteHTML').then((m) => m.SpIconPasteHTML as any),
  { ssr: false }
);
