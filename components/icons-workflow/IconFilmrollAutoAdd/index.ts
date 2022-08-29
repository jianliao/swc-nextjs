import dynamic from 'next/dynamic';

import { IconFilmrollAutoAdd } from '@spectrum-web-components/icons-workflow/src/elements/IconFilmrollAutoAdd.js';

export const SpIconFilmrollAutoAdd = dynamic<IconFilmrollAutoAdd | { slot: string }>(
  () => import('./IconFilmrollAutoAdd').then((m) => m.SpIconFilmrollAutoAdd as any),
  { ssr: false }
);
