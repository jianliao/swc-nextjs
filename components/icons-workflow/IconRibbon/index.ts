import dynamic from 'next/dynamic';

import { IconRibbon } from '@spectrum-web-components/icons-workflow/src/elements/IconRibbon.js';

export const SpIconRibbon = dynamic<Partial<IconRibbon> | { slot: string }>(
  () => import('./IconRibbon').then((m) => m.SpIconRibbon as any),
  { ssr: false}
);
