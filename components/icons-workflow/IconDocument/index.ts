import dynamic from 'next/dynamic';

import { IconDocument } from '@spectrum-web-components/icons-workflow/src/elements/IconDocument.js';

export const SpIconDocument = dynamic<IconDocument | { slot: string }>(
  () => import('./IconDocument').then((m) => m.SpIconDocument as any),
  { ssr: false }
);
