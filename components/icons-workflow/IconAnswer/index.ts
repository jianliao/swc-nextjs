import dynamic from 'next/dynamic';

import { IconAnswer } from '@spectrum-web-components/icons-workflow/src/elements/IconAnswer.js';

export const SpIconAnswer = dynamic<Partial<IconAnswer> | { slot: string }>(
  () => import('./IconAnswer').then((m) => m.SpIconAnswer as any),
  { ssr: false}
);
