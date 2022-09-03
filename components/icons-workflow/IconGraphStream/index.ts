import dynamic from 'next/dynamic';

import { IconGraphStream } from '@spectrum-web-components/icons-workflow/src/elements/IconGraphStream.js';

export const SpIconGraphStream = dynamic<Partial<IconGraphStream> | { slot: string }>(
  () => import('./IconGraphStream').then((m) => m.SpIconGraphStream as any),
  { ssr: false}
);
