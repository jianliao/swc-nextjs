import dynamic from 'next/dynamic';

import { IconCamera } from '@spectrum-web-components/icons-workflow/src/elements/IconCamera.js';

export const SpIconCamera = dynamic<Partial<IconCamera> | { slot: string }>(
  () => import('./IconCamera').then((m) => m.SpIconCamera as any),
  { ssr: false }
);
