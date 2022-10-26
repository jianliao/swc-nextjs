import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { Table } from '@spectrum-web-components/table';
import { TableBody } from '@spectrum-web-components/table';
import { TableCell } from '@spectrum-web-components/table';
import { TableCheckboxCell } from '@spectrum-web-components/table';
import { TableHead } from '@spectrum-web-components/table';
import { TableHeadCell } from '@spectrum-web-components/table';
import { TableRow } from '@spectrum-web-components/table';

const ssr = false;

export const SpTable = dynamic<
  | Partial<Table>
  | { children?: ReactNode }
  | { focus: Function }
  | { scrollToIndex: Function }
  | { change: Function }
  | { rangeChanged: Function }
>(() => import('./Table').then((m) => m.SpTable as any), { ssr });
export const SpTableBody = dynamic<Partial<TableBody> | { children?: ReactNode }>(
  () => import('./Table').then((m) => m.SpTableBody as any),
  { ssr }
);
export const SpTableCell = dynamic<Partial<TableCell> | { children?: ReactNode }>(
  () => import('./Table').then((m) => m.SpTableCell as any),
  { ssr }
);
export const SpTableCheckboxCell = dynamic<
  Partial<TableCheckboxCell> | { children?: ReactNode } | { click: Function }
>(() => import('./Table').then((m) => m.SpTableCheckboxCell as any), { ssr });
export const SpTableHead = dynamic<Partial<TableHead> | { children?: ReactNode }>(
  () => import('./Table').then((m) => m.SpTableHead as any),
  { ssr }
);
export const SpTableHeadCell = dynamic<
  Partial<TableHeadCell> | { children?: ReactNode } | { sorted: Function }
>(() => import('./Table').then((m) => m.SpTableHeadCell as any), { ssr });
export const SpTableRow = dynamic<
  Partial<TableRow> | { children?: ReactNode } | { sorted: Function }
>(() => import('./Table').then((m) => m.SpTableRow as any), { ssr });
