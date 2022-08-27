import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Card } from '@spectrum-web-components/card';

const ssr = false;

export const SpCard = dynamic<
  Card | { children?: ReactNode } | { click: Function } | { change: Function }
>(() => import('./Card').then((m) => m.SpCard as any), { ssr });
