import dynamic from 'next/dynamic';

import { IconStage } from '@spectrum-web-components/icons-workflow/src/elements/IconStage.js';

export const SpIconStage = dynamic<IconStage | { slot: string }>(
  () => import('./IconStage').then((m) => m.SpIconStage as any),
  { ssr: false }
);
