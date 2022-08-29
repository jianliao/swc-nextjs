import dynamic from 'next/dynamic';

import { IconDocumentFragmentGroup } from '@spectrum-web-components/icons-workflow/src/elements/IconDocumentFragmentGroup.js';

export const SpIconDocumentFragmentGroup = dynamic<IconDocumentFragmentGroup | { slot: string }>(
  () => import('./IconDocumentFragmentGroup').then((m) => m.SpIconDocumentFragmentGroup as any),
  { ssr: false }
);
