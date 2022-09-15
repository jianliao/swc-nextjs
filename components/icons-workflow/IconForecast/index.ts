import dynamic from 'next/dynamic';

import { IconForecast } from '@spectrum-web-components/icons-workflow/src/elements/IconForecast.js';

export const SpIconForecast = dynamic<Partial<IconForecast> | { slot: string }>(
  () => import('./IconForecast').then((m) => m.SpIconForecast as any),
  { ssr: false }
);
