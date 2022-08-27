import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Avatar } from '@spectrum-web-components/avatar';

const ssr = false;

export const SpAvatar = dynamic<Avatar | { children?: ReactNode }>(
  () => import('./Avatar').then((m) => m.SpAvatar as any),
  { ssr }
);
