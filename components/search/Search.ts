import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Search } from '@spectrum-web-components/search';

import '@spectrum-web-components/search/sp-search.js';

export const SpSearch = createComponent(
  React,
  'sp-search',
  Search,
  { submit: 'submit', change: 'change', input: 'input' },
  'SpSearch'
);
