import dynamic from 'next/dynamic';

import { IconRss } from '@spectrum-web-components/icons-workflow/src/elements/IconRss.js';

export const SpIconRss = dynamic<IconRss | { slot: string }>(
  () => import('./IconRss').then((m) => m.SpIconRss as any),
  { ssr: false }
);
