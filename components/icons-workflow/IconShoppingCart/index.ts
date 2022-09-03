import dynamic from 'next/dynamic';

import { IconShoppingCart } from '@spectrum-web-components/icons-workflow/src/elements/IconShoppingCart.js';

export const SpIconShoppingCart = dynamic<Partial<IconShoppingCart> | { slot: string }>(
  () => import('./IconShoppingCart').then((m) => m.SpIconShoppingCart as any),
  { ssr: false}
);
