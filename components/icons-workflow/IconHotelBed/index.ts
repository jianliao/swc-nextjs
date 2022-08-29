import dynamic from 'next/dynamic';

import { IconHotelBed } from '@spectrum-web-components/icons-workflow/src/elements/IconHotelBed.js';

export const SpIconHotelBed = dynamic<IconHotelBed | { slot: string }>(
  () => import('./IconHotelBed').then((m) => m.SpIconHotelBed as any),
  { ssr: false }
);
