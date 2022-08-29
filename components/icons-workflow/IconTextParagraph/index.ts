import dynamic from 'next/dynamic';

import { IconTextParagraph } from '@spectrum-web-components/icons-workflow/src/elements/IconTextParagraph.js';

export const SpIconTextParagraph = dynamic<IconTextParagraph | { slot: string }>(
  () => import('./IconTextParagraph').then((m) => m.SpIconTextParagraph as any),
  { ssr: false }
);
