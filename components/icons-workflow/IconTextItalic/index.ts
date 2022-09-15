import dynamic from 'next/dynamic';

import { IconTextItalic } from '@spectrum-web-components/icons-workflow/src/elements/IconTextItalic.js';

export const SpIconTextItalic = dynamic<Partial<IconTextItalic> | { slot: string }>(
  () => import('./IconTextItalic').then((m) => m.SpIconTextItalic as any),
  { ssr: false }
);
