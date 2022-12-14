import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Button } from '@spectrum-web-components/button';
import { ClearButton } from '@spectrum-web-components/button';
import { CloseButton } from '@spectrum-web-components/button';

const ssr = false;

export const SpButton = dynamic<
  Partial<Button> | { children?: ReactNode } | { click: Function } | { renderAnchor: Function }
>(() => import('./Button').then((m) => m.SpButton as any), { ssr });
export const SpClearButton = dynamic<
  Partial<ClearButton> | { children?: ReactNode } | { click: Function } | { renderAnchor: Function }
>(() => import('./Button').then((m) => m.SpClearButton as any), { ssr });
export const SpCloseButton = dynamic<
  Partial<CloseButton> | { children?: ReactNode } | { click: Function } | { renderAnchor: Function }
>(() => import('./Button').then((m) => m.SpCloseButton as any), { ssr });
