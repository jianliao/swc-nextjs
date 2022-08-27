import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Link } from '@spectrum-web-components/link';

const ssr = false;

export const SpLink = dynamic<Link | { children?: ReactNode }>(() => import('./Link').then(m => m.SpLink as any), { ssr });

