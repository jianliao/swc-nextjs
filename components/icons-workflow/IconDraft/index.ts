import dynamic from 'next/dynamic';

import { IconDraft } from '@spectrum-web-components/icons-workflow/src/elements/IconDraft.js';

export const SpIconDraft = dynamic<Partial<IconDraft> | { slot: string }>(
  () => import('./IconDraft').then((m) => m.SpIconDraft as any),
  { ssr: false}
);
