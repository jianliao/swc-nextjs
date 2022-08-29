import dynamic from 'next/dynamic';

import { IconTextAlignJustify } from '@spectrum-web-components/icons-workflow/src/elements/IconTextAlignJustify.js';

export const SpIconTextAlignJustify = dynamic<IconTextAlignJustify | { slot: string }>(
  () => import('./IconTextAlignJustify').then((m) => m.SpIconTextAlignJustify as any),
  { ssr: false }
);
