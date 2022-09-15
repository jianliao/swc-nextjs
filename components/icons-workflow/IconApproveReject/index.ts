import dynamic from 'next/dynamic';

import { IconApproveReject } from '@spectrum-web-components/icons-workflow/src/elements/IconApproveReject.js';

export const SpIconApproveReject = dynamic<Partial<IconApproveReject> | { slot: string }>(
  () => import('./IconApproveReject').then((m) => m.SpIconApproveReject as any),
  { ssr: false }
);
