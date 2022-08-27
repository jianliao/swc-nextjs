import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Search } from '@spectrum-web-components/search';

const ssr = false;

export const SpSearch = dynamic<Search | { children?: ReactNode }>(
  () => import('./Search').then((m) => m.SpSearch as any),
  { ssr }
);
