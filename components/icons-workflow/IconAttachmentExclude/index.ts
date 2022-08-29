import dynamic from 'next/dynamic';

import { IconAttachmentExclude } from '@spectrum-web-components/icons-workflow/src/elements/IconAttachmentExclude.js';

export const SpIconAttachmentExclude = dynamic<IconAttachmentExclude | { slot: string }>(
  () => import('./IconAttachmentExclude').then((m) => m.SpIconAttachmentExclude as any),
  { ssr: false}
);
