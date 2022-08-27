import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Badge } from '@spectrum-web-components/badge';

const ssr = false;

export const SpBadge = dynamic<Badge | { children?: ReactNode }>(
  () => import('./Badge').then((m) => m.SpBadge as any),
  { ssr }
);
