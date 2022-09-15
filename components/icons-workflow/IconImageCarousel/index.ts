import dynamic from 'next/dynamic';

import { IconImageCarousel } from '@spectrum-web-components/icons-workflow/src/elements/IconImageCarousel.js';

export const SpIconImageCarousel = dynamic<Partial<IconImageCarousel> | { slot: string }>(
  () => import('./IconImageCarousel').then((m) => m.SpIconImageCarousel as any),
  { ssr: false }
);
