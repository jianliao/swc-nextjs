import dynamic from 'next/dynamic';

import { IconTextSuperscript } from '@spectrum-web-components/icons-workflow/src/elements/IconTextSuperscript.js';

export const SpIconTextSuperscript = dynamic<Partial<IconTextSuperscript> | { slot: string }>(
  () => import('./IconTextSuperscript').then((m) => m.SpIconTextSuperscript as any),
  { ssr: false }
);
