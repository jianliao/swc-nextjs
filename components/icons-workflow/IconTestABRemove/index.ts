import dynamic from 'next/dynamic';

import { IconTestABRemove } from '@spectrum-web-components/icons-workflow/src/elements/IconTestABRemove.js';

export const SpIconTestABRemove = dynamic<Partial<IconTestABRemove> | { slot: string }>(
  () => import('./IconTestABRemove').then((m) => m.SpIconTestABRemove as any),
  { ssr: false }
);
