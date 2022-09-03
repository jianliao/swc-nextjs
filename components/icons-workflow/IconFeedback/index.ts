import dynamic from 'next/dynamic';

import { IconFeedback } from '@spectrum-web-components/icons-workflow/src/elements/IconFeedback.js';

export const SpIconFeedback = dynamic<Partial<IconFeedback> | { slot: string }>(
  () => import('./IconFeedback').then((m) => m.SpIconFeedback as any),
  { ssr: false}
);
