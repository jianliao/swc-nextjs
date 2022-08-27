import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Banner } from '@spectrum-web-components/banner';

const ssr = false;

export const SpBanner = dynamic<Banner | { children?: ReactNode }>(() => import('./Banner').then(m => m.SpBanner as any), { ssr });

