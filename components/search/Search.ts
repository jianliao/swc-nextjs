import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Search } from '@spectrum-web-components/search';

import '@spectrum-web-components/search/sp-search.js';

export const SpSearch = createComponent(
  React,
  'sp-search',
  Search,
  {
    reset: 'reset',
    submit: 'submit',
    setSelectionRange: 'setSelectionRange',
    select: 'select',
    checkValidity: 'checkValidity',
    change: 'change',
    input: 'input',
  },
  'SpSearch'
);
