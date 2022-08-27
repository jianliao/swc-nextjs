import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { IllustratedMessage } from '@spectrum-web-components/illustrated-message';

const ssr = false;

export const SpIllustratedMessage = dynamic<IllustratedMessage | { children?: ReactNode }>(() => import('./IllustratedMessage').then(m => m.SpIllustratedMessage as any), { ssr });
