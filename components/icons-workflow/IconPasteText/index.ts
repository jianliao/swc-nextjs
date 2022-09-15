import dynamic from 'next/dynamic';

import { IconPasteText } from '@spectrum-web-components/icons-workflow/src/elements/IconPasteText.js';

export const SpIconPasteText = dynamic<Partial<IconPasteText> | { slot: string }>(
  () => import('./IconPasteText').then((m) => m.SpIconPasteText as any),
  { ssr: false }
);
