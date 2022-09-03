import dynamic from 'next/dynamic';

import { IconDocumentOutline } from '@spectrum-web-components/icons-workflow/src/elements/IconDocumentOutline.js';

export const SpIconDocumentOutline = dynamic<Partial<IconDocumentOutline> | { slot: string }>(
  () => import('./IconDocumentOutline').then((m) => m.SpIconDocumentOutline as any),
  { ssr: false}
);
