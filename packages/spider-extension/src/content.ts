/**
 * @file content.ts
 * @author jjq
 * @description content.ts
*/

import App, { init } from './content/ui/App';

const root = document.createElement('div');
root.id = 'doulingo-ext-root';
document.body.appendChild(root);
init(root);

// initListenCenter();
