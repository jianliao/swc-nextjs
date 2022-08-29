import dynamic from 'next/dynamic';

import { IconVoiceOver } from '@spectrum-web-components/icons-workflow/src/elements/IconVoiceOver.js';

export const SpIconVoiceOver = dynamic<IconVoiceOver | { slot: string }>(
  () => import('./IconVoiceOver').then((m) => m.SpIconVoiceOver as any),
  { ssr: false }
);
