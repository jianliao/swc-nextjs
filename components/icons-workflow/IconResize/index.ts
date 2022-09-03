import dynamic from 'next/dynamic';

import { IconResize } from '@spectrum-web-components/icons-workflow/src/elements/IconResize.js';

export const SpIconResize = dynamic<Partial<IconResize> | { slot: string }>(
  () => import('./IconResize').then((m) => m.SpIconResize as any),
  { ssr: false}
);
