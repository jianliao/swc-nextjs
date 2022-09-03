import dynamic from 'next/dynamic';

import { IconMovieCamera } from '@spectrum-web-components/icons-workflow/src/elements/IconMovieCamera.js';

export const SpIconMovieCamera = dynamic<Partial<IconMovieCamera> | { slot: string }>(
  () => import('./IconMovieCamera').then((m) => m.SpIconMovieCamera as any),
  { ssr: false}
);
