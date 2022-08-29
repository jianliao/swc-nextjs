import dynamic from 'next/dynamic';

import { IconDocumentFragment } from '@spectrum-web-components/icons-workflow/src/elements/IconDocumentFragment.js';

export const SpIconDocumentFragment = dynamic<IconDocumentFragment | { slot: string }>(
  () => import('./IconDocumentFragment').then((m) => m.SpIconDocumentFragment as any),
  { ssr: false }
);
