import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { NumberField } from '@spectrum-web-components/number-field';

const ssr = false;

export const SpNumberField = dynamic<
  | NumberField
  | { children?: ReactNode }
  | { change: Function }
  | { input: Function }
>(() => import('./NumberField').then((m) => m.SpNumberField as any), { ssr });
