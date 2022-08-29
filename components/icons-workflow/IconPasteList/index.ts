import dynamic from 'next/dynamic';

import { IconPasteList } from '@spectrum-web-components/icons-workflow/src/elements/IconPasteList.js';

export const SpIconPasteList = dynamic<IconPasteList | { slot: string }>(
  () => import('./IconPasteList').then((m) => m.SpIconPasteList as any),
  { ssr: false}
);
