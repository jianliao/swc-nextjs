import * as React from 'react';
import { createComponent } from '@lit-labs/react';

import { Avatar } from '@spectrum-web-components/avatar';

import '@spectrum-web-components/avatar/sp-avatar.js';

export const SpAvatar = createComponent(React, 'sp-avatar', Avatar, {}, 'SpAvatar');
