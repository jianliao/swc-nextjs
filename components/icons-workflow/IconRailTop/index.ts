import dynamic from 'next/dynamic';

import { IconRailTop } from '@spectrum-web-components/icons-workflow/src/elements/IconRailTop.js';

export const SpIconRailTop = dynamic<IconRailTop | { slot: string }>(
  () => import('./IconRailTop').then((m) => m.SpIconRailTop as any),
  { ssr: false}
);
