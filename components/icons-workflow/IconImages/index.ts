import dynamic from 'next/dynamic';

import { IconImages } from '@spectrum-web-components/icons-workflow/src/elements/IconImages.js';

export const SpIconImages = dynamic<IconImages | { slot: string }>(
  () => import('./IconImages').then((m) => m.SpIconImages as any),
  { ssr: false }
);
