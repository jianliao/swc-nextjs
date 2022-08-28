import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Popover } from '@spectrum-web-components/popover';

const ssr = false;

export const SpPopover = dynamic<Popover | { children?: ReactNode } | { onOverlayQuery: Function }>(
  () => import('./Popover').then((m) => m.SpPopover as any),
  { ssr }
);
