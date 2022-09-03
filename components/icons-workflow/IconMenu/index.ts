import dynamic from 'next/dynamic';

import { IconMenu } from '@spectrum-web-components/icons-workflow/src/elements/IconMenu.js';

export const SpIconMenu = dynamic<Partial<IconMenu> | { slot: string }>(
  () => import('./IconMenu').then((m) => m.SpIconMenu as any),
  { ssr: false}
);
