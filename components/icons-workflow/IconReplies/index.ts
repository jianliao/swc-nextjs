import dynamic from 'next/dynamic';

import { IconReplies } from '@spectrum-web-components/icons-workflow/src/elements/IconReplies.js';

export const SpIconReplies = dynamic<IconReplies | { slot: string }>(
  () => import('./IconReplies').then((m) => m.SpIconReplies as any),
  { ssr: false }
);
