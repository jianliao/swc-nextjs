import dynamic from 'next/dynamic';

import { IconDocumentRefresh } from '@spectrum-web-components/icons-workflow/src/elements/IconDocumentRefresh.js';

export const SpIconDocumentRefresh = dynamic<Partial<IconDocumentRefresh> | { slot: string }>(
  () => import('./IconDocumentRefresh').then((m) => m.SpIconDocumentRefresh as any),
  { ssr: false }
);
