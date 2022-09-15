import dynamic from 'next/dynamic';

import { IconPaste } from '@spectrum-web-components/icons-workflow/src/elements/IconPaste.js';

export const SpIconPaste = dynamic<Partial<IconPaste> | { slot: string }>(
  () => import('./IconPaste').then((m) => m.SpIconPaste as any),
  { ssr: false }
);
