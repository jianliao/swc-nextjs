import dynamic from 'next/dynamic';

import { IconPrintPreview } from '@spectrum-web-components/icons-workflow/src/elements/IconPrintPreview.js';

export const SpIconPrintPreview = dynamic<Partial<IconPrintPreview> | { slot: string }>(
  () => import('./IconPrintPreview').then((m) => m.SpIconPrintPreview as any),
  { ssr: false }
);
