import dynamic from 'next/dynamic';

import { IconQuestion } from '@spectrum-web-components/icons-workflow/src/elements/IconQuestion.js';

export const SpIconQuestion = dynamic<Partial<IconQuestion> | { slot: string }>(
  () => import('./IconQuestion').then((m) => m.SpIconQuestion as any),
  { ssr: false }
);
