import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Search } from '@spectrum-web-components/search';

const ssr = false;

export const SpSearch = dynamic<
  | Search
  | { children?: ReactNode }
  | { submit: Function }
  | { change: Function }
  | { input: Function }
>(() => import('./Search').then((m) => m.SpSearch as any), { ssr });
