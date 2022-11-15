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

export const SpTable = createComponent({
  react: React,
  tagName: 'sp-table',
  elementClass: Table,
  events: {
    focus: 'focus',
    scrollToIndex: 'scrollToIndex',
    change: 'change',
    rangeChanged: 'rangeChanged',
  },
  displayName: 'SpTable',
});
export const SpTableBody = createComponent({
  react: React,
  tagName: 'sp-table',
  elementClass: TableBody,
  events: {},
  displayName: 'SpTableBody',
});
export const SpTableCell = createComponent({
  react: React,
  tagName: 'sp-table',
  elementClass: TableCell,
  events: {},
  displayName: 'SpTableCell',
});
export const SpTableCheckboxCell = createComponent({
  react: React,
  tagName: 'sp-table',
  elementClass: TableCheckboxCell,
  events: { click: 'click' },
  displayName: 'SpTableCheckboxCell',
});
export const SpTableHead = createComponent({
  react: React,
  tagName: 'sp-table',
  elementClass: TableHead,
  events: {},
  displayName: 'SpTableHead',
});
export const SpTableHeadCell = createComponent({
  react: React,
  tagName: 'sp-table',
  elementClass: TableHeadCell,
  events: { sorted: 'sorted' },
  displayName: 'SpTableHeadCell',
});
export const SpTableRow = createComponent({
  react: React,
  tagName: 'sp-table',
  elementClass: TableRow,
  events: { sorted: 'sorted' },
  displayName: 'SpTableRow',
});
