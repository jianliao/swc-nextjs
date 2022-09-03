import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Radio } from '@spectrum-web-components/radio';
import { RadioGroup } from '@spectrum-web-components/radio';

const ssr = false;

export const SpRadio = dynamic<
  | Partial<Radio>
  | { children?: ReactNode }
  | { click: Function }
  | { keydown: Function }
  | { change: Function }
>(() => import('./Radio').then((m) => m.SpRadio as any), { ssr });
export const SpRadioGroup = dynamic<
  Partial<RadioGroup> | { children?: ReactNode } | { focus: Function } | { change: Function }
>(() => import('./Radio').then((m) => m.SpRadioGroup as any), { ssr });
