import dynamic from 'next/dynamic';

import { IconLinkGlobe } from '@spectrum-web-components/icons-workflow/src/elements/IconLinkGlobe.js';

export const SpIconLinkGlobe = dynamic<IconLinkGlobe | { slot: string }>(
  () => import('./IconLinkGlobe').then((m) => m.SpIconLinkGlobe as any),
  { ssr: false }
);
