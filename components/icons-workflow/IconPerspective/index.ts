import dynamic from 'next/dynamic';

import { IconPerspective } from '@spectrum-web-components/icons-workflow/src/elements/IconPerspective.js';

export const SpIconPerspective = dynamic<Partial<IconPerspective> | { slot: string }>(
  () => import('./IconPerspective').then((m) => m.SpIconPerspective as any),
  { ssr: false }
);
