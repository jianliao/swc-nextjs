import dynamic from 'next/dynamic';

import { IconReplyAll } from '@spectrum-web-components/icons-workflow/src/elements/IconReplyAll.js';

export const SpIconReplyAll = dynamic<Partial<IconReplyAll> | { slot: string }>(
  () => import('./IconReplyAll').then((m) => m.SpIconReplyAll as any),
  { ssr: false}
);
