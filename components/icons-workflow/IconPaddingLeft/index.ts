import dynamic from 'next/dynamic';

import { IconPaddingLeft } from '@spectrum-web-components/icons-workflow/src/elements/IconPaddingLeft.js';

export const SpIconPaddingLeft = dynamic<Partial<IconPaddingLeft> | { slot: string }>(
  () => import('./IconPaddingLeft').then((m) => m.SpIconPaddingLeft as any),
  { ssr: false}
);
