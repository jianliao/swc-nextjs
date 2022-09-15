import dynamic from 'next/dynamic';

import { IconRectangle } from '@spectrum-web-components/icons-workflow/src/elements/IconRectangle.js';

export const SpIconRectangle = dynamic<Partial<IconRectangle> | { slot: string }>(
  () => import('./IconRectangle').then((m) => m.SpIconRectangle as any),
  { ssr: false }
);
