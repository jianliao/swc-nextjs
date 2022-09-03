import dynamic from 'next/dynamic';

import { IconShowMenu } from '@spectrum-web-components/icons-workflow/src/elements/IconShowMenu.js';

export const SpIconShowMenu = dynamic<Partial<IconShowMenu> | { slot: string }>(
  () => import('./IconShowMenu').then((m) => m.SpIconShowMenu as any),
  { ssr: false}
);
