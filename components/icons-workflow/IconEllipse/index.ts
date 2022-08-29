import dynamic from 'next/dynamic';

import { IconEllipse } from '@spectrum-web-components/icons-workflow/src/elements/IconEllipse.js';

export const SpIconEllipse = dynamic<IconEllipse | { slot: string }>(
  () => import('./IconEllipse').then((m) => m.SpIconEllipse as any),
  { ssr: false}
);
