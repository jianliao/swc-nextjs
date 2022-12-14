import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Swatch } from '@spectrum-web-components/swatch';
import { SwatchGroup } from '@spectrum-web-components/swatch';

const ssr = false;

export const SpSwatch = dynamic<
  Partial<Swatch> | { children?: ReactNode } | { toggle: Function } | { change: Function }
>(() => import('./Swatch').then((m) => m.SpSwatch as any), { ssr });
export const SpSwatchGroup = dynamic<
  Partial<SwatchGroup> | { children?: ReactNode } | { focus: Function } | { change: Function }
>(() => import('./Swatch').then((m) => m.SpSwatchGroup as any), { ssr });
