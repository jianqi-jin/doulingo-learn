/**
 * @file content.ts
 * @author jjq
 * @description content.ts
*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './content/ui/App';

const root = document.createElement('div');
root.id = 'doulingo-ext-root';
document.body.appendChild(root);
createRoot(root).render(App());
