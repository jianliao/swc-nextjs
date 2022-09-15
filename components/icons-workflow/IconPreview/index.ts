import dynamic from 'next/dynamic';

import { IconPreview } from '@spectrum-web-components/icons-workflow/src/elements/IconPreview.js';

export const SpIconPreview = dynamic<Partial<IconPreview> | { slot: string }>(
  () => import('./IconPreview').then((m) => m.SpIconPreview as any),
  { ssr: false }
);
