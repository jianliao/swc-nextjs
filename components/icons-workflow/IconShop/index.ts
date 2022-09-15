import dynamic from 'next/dynamic';

import { IconShop } from '@spectrum-web-components/icons-workflow/src/elements/IconShop.js';

export const SpIconShop = dynamic<Partial<IconShop> | { slot: string }>(
  () => import('./IconShop').then((m) => m.SpIconShop as any),
  { ssr: false }
);
