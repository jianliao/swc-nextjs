import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Textfield } from '@spectrum-web-components/textfield';

const ssr = false;

export const SpTextfield = dynamic<Textfield | { children?: ReactNode }>(
  () => import('./Textfield').then((m) => m.SpTextfield as any),
  { ssr }
);
