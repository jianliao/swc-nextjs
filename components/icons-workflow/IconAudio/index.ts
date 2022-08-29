import dynamic from 'next/dynamic';

import { IconAudio } from '@spectrum-web-components/icons-workflow/src/elements/IconAudio.js';

export const SpIconAudio = dynamic<IconAudio | { slot: string }>(
  () => import('./IconAudio').then((m) => m.SpIconAudio as any),
  { ssr: false}
);
