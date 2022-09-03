import dynamic from 'next/dynamic';

import { IconFilmroll } from '@spectrum-web-components/icons-workflow/src/elements/IconFilmroll.js';

export const SpIconFilmroll = dynamic<Partial<IconFilmroll> | { slot: string }>(
  () => import('./IconFilmroll').then((m) => m.SpIconFilmroll as any),
  { ssr: false}
);
