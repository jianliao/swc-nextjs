import dynamic from 'next/dynamic';

import { IconAnswerFavorite } from '@spectrum-web-components/icons-workflow/src/elements/IconAnswerFavorite.js';

export const SpIconAnswerFavorite = dynamic<IconAnswerFavorite | { slot: string }>(
  () => import('./IconAnswerFavorite').then((m) => m.SpIconAnswerFavorite as any),
  { ssr: false }
);
