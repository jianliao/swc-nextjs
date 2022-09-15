import dynamic from 'next/dynamic';

import { IconLoupeView } from '@spectrum-web-components/icons-workflow/src/elements/IconLoupeView.js';

export const SpIconLoupeView = dynamic<Partial<IconLoupeView> | { slot: string }>(
  () => import('./IconLoupeView').then((m) => m.SpIconLoupeView as any),
  { ssr: false }
);
