import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Button, ClearButton, CloseButton } from '@spectrum-web-components/button';

export const SpButton = dynamic<Button | { children?: ReactNode }>(() => import('./Button').then(m => m.SpButton as any), { ssr: false });

export const SpClearButton = dynamic<ClearButton | { children?: ReactNode }>(() => import('./Button').then(m => m.SpClearButton as any), { ssr: false });

export const SpCloseButton = dynamic<CloseButton | { children?: ReactNode }>(() => import('./Button').then(m => m.SpCloseButton as any), { ssr: false });
