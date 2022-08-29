import dynamic from 'next/dynamic';

import { IconCheckPause } from '@spectrum-web-components/icons-workflow/src/elements/IconCheckPause.js';

export const SpIconCheckPause = dynamic<IconCheckPause | { slot: string }>(
  () => import('./IconCheckPause').then((m) => m.SpIconCheckPause as any),
  { ssr: false }
);
