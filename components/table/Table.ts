import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Table } from '@spectrum-web-components/table';
import { TableBody } from '@spectrum-web-components/table';
import { TableCell } from '@spectrum-web-components/table';
import { TableCheckboxCell } from '@spectrum-web-components/table';
import { TableHead } from '@spectrum-web-components/table';
import { TableHeadCell } from '@spectrum-web-components/table';
import { TableRow } from '@spectrum-web-components/table';

import '@spectrum-web-components/table/sp-table-body.js';
import '@spectrum-web-components/table/sp-table-cell.js';
import '@spectrum-web-components/table/sp-table-checkbox-cell.js';
import '@spectrum-web-components/table/sp-table-head-cell.js';
import '@spectrum-web-components/table/sp-table-head.js';
import '@spectrum-web-components/table/sp-table-row.js';
import '@spectrum-web-components/table/sp-table.js';

export const SpTable = createComponent(
  React,
  'sp-table',
  Table,
  {
    focus: 'focus',
    scrollToIndex: 'scrollToIndex',
    change: 'change',
    rangeChanged: 'rangeChanged',
  },
  'SpTable'
);
export const SpTableBody = createComponent(React, 'sp-table', TableBody, {}, 'SpTableBody');
export const SpTableCell = createComponent(React, 'sp-table', TableCell, {}, 'SpTableCell');
export const SpTableCheckboxCell = createComponent(
  React,
  'sp-table',
  TableCheckboxCell,
  { click: 'click' },
  'SpTableCheckboxCell'
);
export const SpTableHead = createComponent(React, 'sp-table', TableHead, {}, 'SpTableHead');
export const SpTableHeadCell = createComponent(
  React,
  'sp-table',
  TableHeadCell,
  { sorted: 'sorted' },
  'SpTableHeadCell'
);
export const SpTableRow = createComponent(
  React,
  'sp-table',
  TableRow,
  { sorted: 'sorted' },
  'SpTableRow'
);
